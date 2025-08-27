import { dbConnection } from "./db/connection"
import { DbAdapter } from "./db/orm.adapter"

export const container = {
  database: DbAdapter(dbConnection)
}

export type Container = typeof container
