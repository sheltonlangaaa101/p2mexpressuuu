import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface Store {
  id: string;
  name: string;
  url: string;
  color: string;
  description: string;
}

export interface Promotion {
  id: string;
  store: string;
  date: string;
  discount: string;
  color: string;
  isHot: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Step {
  id: number;
  icon: string;
  title: string;
  description: string;
}
