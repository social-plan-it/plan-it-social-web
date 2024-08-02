import { db } from './db.server';
import type { Prisma, Role } from '@prisma/client';

export type FindGroupsArgs = {
  count?: number;
  skip?: number;
  query?: string;
  userId?: string;
  role?: Role;
};

export async function findGroups(this: any, { count = 24, skip, query, userId, role }: FindGroupsArgs) {
  const whereArg: Prisma.GroupWhereInput = {};

  if (query) {
    whereArg.OR = [{ name: { contains: query } }, { description: { contains: query } }];
  }

  if (userId && role) {
    whereArg.user_groups = { some: { userId, role } };
  }

  const result = await db.$transaction([
    db.group.findMany({
      where: whereArg,
      skip: skip,
      take: count,
    }),
    db.group.count({ where: whereArg }),
  ]);

  return result;
}
