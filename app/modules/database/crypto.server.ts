import bcrypt from 'bcryptjs';

export function getHash(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export function matchesHash(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
