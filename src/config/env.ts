import dotenv from 'dotenv';

dotenv.config();

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function optionalEnv(key: string, defaultValue: string): string {
  return process.env[key] ?? defaultValue;
}

export const env = {
  NODE_ENV: optionalEnv('NODE_ENV', 'development'),
  PORT: parseInt(optionalEnv('PORT', '3000'), 10),
  DATABASE_URL: requireEnv('DATABASE_URL'),
  JWT_SECRET: requireEnv('JWT_SECRET'),
  JWT_EXPIRES_IN: optionalEnv('JWT_EXPIRES_IN', '7d'),
  BCRYPT_SALT_ROUNDS: parseInt(optionalEnv('BCRYPT_SALT_ROUNDS', '12'), 10),
  ADMIN_PASSWORD: requireEnv('ADMIN_PASSWORD'),
  SESSION_SECRET: requireEnv('SESSION_SECRET'),
  get isDevelopment() {
    return this.NODE_ENV === 'development';
  },
  get isProduction() {
    return this.NODE_ENV === 'production';
  },
};
