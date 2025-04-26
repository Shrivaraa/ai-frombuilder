import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_yCPLceN07khq@ep-purple-waterfall-a45d24wk-pooler.us-east-1.aws.neon.tech/Ai-From-Builder?sslmode=require",
  }
});
