import { db } from "./db/connection"

export const container = {
  db
}

export type Container = typeof container
