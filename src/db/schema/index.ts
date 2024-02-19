// Add necessary tables to this file.
// They will automatically get picked up during deploy migrate step.

// 👇See below for an example of a `users` table

// import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
// import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
//
// export const users = pgTable('users', {
//   id: uuid('id').defaultRandom().primaryKey(),
//   name: varchar('name', { length: 256 }).notNull(),
// });
//
// export type User = InferSelectModel<typeof users>;
// export type NewUser = InferInsertModel<typeof users>;