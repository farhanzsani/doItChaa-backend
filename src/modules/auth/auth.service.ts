import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../../config/prisma';
import { env } from '../../config/env';
import { ConflictError, UnauthorizedError } from '../../common/errors/AppError';
import { DEFAULT_CATEGORIES } from '../../common/constants';
import type { RegisterInput, LoginInput } from './auth.schema';

export async function registerUser(input: RegisterInput) {
  const existingUser = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (existingUser) {
    throw new ConflictError('Email is already registered');
  }

  const hashedPassword = await bcrypt.hash(input.password, env.BCRYPT_SALT_ROUNDS);

  const user = await prisma.user.create({
    data: {
      email: input.email,
      password: hashedPassword,
      categories: {
        create: DEFAULT_CATEGORIES.map((name) => ({ name })),
      },
    },
    select: {
      id: true,
      email: true,
      createdAt: true,
    },
  });

  const token = generateToken(user.id, user.email);

  return { user, token };
}

export async function loginUser(input: LoginInput) {
  const user = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (!user) {
    throw new UnauthorizedError('Invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(input.password, user.password);

  if (!isPasswordValid) {
    throw new UnauthorizedError('Invalid email or password');
  }

  const token = generateToken(user.id, user.email);

  return {
    user: {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
    },
    token,
  };
}

export async function getCurrentUser(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      createdAt: true,
    },
  });

  if (!user) {
    throw new UnauthorizedError('User not found');
  }

  return user;
}

function generateToken(userId: string, email: string): string {
  return jwt.sign(
    { id: userId, email },
    env.JWT_SECRET,
    { expiresIn: env.JWT_EXPIRES_IN } as jwt.SignOptions
  );
}
