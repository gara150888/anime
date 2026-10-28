import type { Session } from "@anime/auth";
import type { Database } from "@anime/db";

export type Context = {
  session: Session | null;
  db: Database;
};
