import { boolean, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const  user =pgTable("user",{
  id: text("id").primaryKey(),
  name:text("name").notNull(),
  email:text("email").notNull().unique(),
  emailVerified:boolean("emailVerified").notNull().$defaultFn(()=>false),
  image:text("image"),
  createdAt:text("createdAt").$defaultFn(()=>new Date().toISOString()).notNull(),
  updatedAt:text("updatedAt").$defaultFn(()=>new Date().toISOString()).notNull(),
})
