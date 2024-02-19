import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema/index.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: String(process.env.DATABASE_URL),
  },
  verbose: true,
  strict: true,
} satisfies Config;