import type { Config } from "drizzle-kit";

const {
  LOCAL_DB_PATH,
  WRANGLER_CONFIG,
  DB_NAME = "astro-d1-prod",
} = process.env;

// See: https://github.com/drizzle-team/drizzle-orm/discussions/1545#discussioncomment-8115423
export default LOCAL_DB_PATH
  ? ({
      schema: "./src/schema.ts",
      driver: "better-sqlite",
      dbCredentials: {
        url: LOCAL_DB_PATH,
      },
    } satisfies Config)
  : ({
      schema: "./src/schema.ts",
      out: "./migrations",
      driver: "d1",
      dbCredentials: {
        wranglerConfigPath:
          new URL("wrangler.toml", import.meta.url).pathname +
          // This is a hack to inject additional cli flags to wrangler
          // since drizzle-kit doesn't support specifying environments.
          WRANGLER_CONFIG
            ? ` ${WRANGLER_CONFIG}`
            : "",
        dbName: DB_NAME,
      },
    } satisfies Config);
