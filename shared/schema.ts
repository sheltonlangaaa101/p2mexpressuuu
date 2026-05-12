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

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface RecentProduct {
  id: string;
  name: string;
  store: string;
  image: string;
  productUrl: string;
  customerName: string;
  purchaseDate: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
}

export interface Order {
  id: string;
  trackingCode: string;
  customerName: string;
  status: 'pending' | 'purchased' | 'shipped' | 'in_transit' | 'delivered';
  statusDescription: string;
  createdAt: string;
  updatedAt: string;
  estimatedDelivery?: string;
}
