import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar
} from "drizzle-orm/pg-core"

// Tabela de usuários
const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
})

// Tabela de tarefas
const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  status: varchar("status", { length: 50 }).notNull().default("pending"),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, {
      onDelete: "cascade"
    }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull()
})

export const schema = {
  users,
  tasks
} as const

export type Table = typeof schema
