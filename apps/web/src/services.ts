import { createAuth } from "@anime/auth";
import { createDb } from "@anime/db";

import { ENV } from "./env.server";

export const db = createDb(ENV);
export const auth = createAuth(ENV, db);
