import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
} from '@simplewebauthn/server';

import { db } from '~/modules/database/db.server';

import type { Authenticator, User } from '@prisma/client';
import type { VerifiedRegistrationResponse } from '@simplewebauthn/server';
import type { AuthenticationResponseJSON, RegistrationResponseJSON } from '@simplewebauthn/types';

interface UserWithAuthenticators extends User {
  authenticators: Authenticator[];
}

const rpName = 'Social Plan it';

const rpID = process.env.WEBAUTHN_RELYING_PARTY_ID ?? '';
if (!rpID) {
  throw new Error('WEBAUTHN_RELYING_PARTY_ID must be set');
}

const origin = process.env.WEBAUTHN_ORIGIN ?? '';
if (!origin) {
  throw new Error('WEBAUTHN_ORIGIN must be set');
}

export async function getPasskeyRegistrationOptions(user: UserWithAuthenticators) {
  const options = await generateRegistrationOptions({
    rpName,
    rpID,
    userID: user.id,
    userName: user.email,
    attestationType: 'none',
    excludeCredentials: user.authenticators.map((authenticator) => ({
      type: 'public-key',
      id: new Uint8Array(Buffer.from(authenticator.credentialID, 'base64')),
    })),
    authenticatorSelection: {
      residentKey: 'preferred',
      userVerification: 'preferred',
    },
  });

  await db.user.update({ where: { id: user.id }, data: { currentChallenge: options.challenge } });

  return options;
}

export async function verifyPasskeyRegistrationResponse(
  user: UserWithAuthenticators,
  response: RegistrationResponseJSON,
): Promise<VerifiedRegistrationResponse> {
  if (!user.currentChallenge) return { verified: false };

  try {
    const verification = await verifyRegistrationResponse({
      response,
      expectedChallenge: user.currentChallenge,
      expectedOrigin: origin,
      expectedRPID: rpID,
    });

    if (verification.verified) {
      const { registrationInfo } = verification;
      if (!registrationInfo) return { verified: false };

      const { credentialPublicKey, credentialID, counter, credentialDeviceType, credentialBackedUp } = registrationInfo;

      await db.authenticator.create({
        data: {
          userId: user.id,
          credentialID: Buffer.from(credentialID)
            .toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, ''),
          credentialPublicKey: Buffer.from(credentialPublicKey),
          counter,
          credentialDeviceType,
          credentialBackedUp,
        },
      });
      await db.user.update({ where: { id: user.id }, data: { currentChallenge: null } });
    }

    return verification;
  } catch {
    return { verified: false };
  }
}

export async function getPasskeyAuthenticationOptions(user: UserWithAuthenticators) {
  const options = await generateAuthenticationOptions({
    rpID,
    allowCredentials: user.authenticators.map((authenticator) => ({
      type: 'public-key',
      id: new Uint8Array(Buffer.from(authenticator.credentialID, 'base64')),
    })),
    userVerification: 'preferred',
  });

  await db.user.update({ where: { id: user.id }, data: { currentChallenge: options.challenge } });

  return options;
}

export async function verifyPasskeyAuthenticationResponse(
  user: UserWithAuthenticators,
  response: AuthenticationResponseJSON,
): Promise<VerifiedRegistrationResponse> {
  const authenticator = user.authenticators.find(({ credentialID }) => {
    return credentialID === response.id;
  });
  if (!authenticator || !user.currentChallenge) return { verified: false };

  try {
    const verification = await verifyAuthenticationResponse({
      response,
      expectedChallenge: user.currentChallenge,
      expectedOrigin: origin,
      expectedRPID: rpID,
      authenticator: {
        ...authenticator,
        credentialID: new Uint8Array(Buffer.from(authenticator.credentialID, 'base64')),
      },
    });

    if (verification.verified) {
      const { authenticationInfo } = verification;
      if (!authenticationInfo) return { verified: false };

      const { newCounter } = authenticationInfo;

      await db.authenticator.update({ where: { id: authenticator.id }, data: { counter: newCounter } });
      await db.user.update({ where: { id: user.id }, data: { currentChallenge: null } });
    }

    return verification;
  } catch {
    return { verified: false };
  }
}
