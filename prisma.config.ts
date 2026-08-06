import { config as loadEnv } from "dotenv";

loadEnv();

const prismaConfig = {
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
};
export default prismaConfig;

