import { z } from "zod";
import { logger } from "./loggers/winston.logger";

export const envVariablesSchema = z.object({
  JWT_SECRET: z.string({ message: "Missing environment variable `JWT_SECRET`." }),
  DATABASE_URL: z.string({
    message: "Missing environment variable `DATABASE_URL`",
  }),
  EXPIRES_IN: z.string({
    message: "Missing environment variable `EXPIRES_IN`.",
  }),
  APP_ENV: z.string({
    message: "Missing environment variable `APP_ENV`.",
  }),
  // ABC: z.string({
  //   message: "Missing environment variable `ABC`.",
  // }),
});

export const checkEnvVariables = () => {
  // envVariablesSchema.parse(process.env);
  const result = envVariablesSchema.safeParse(process.env);

  if (!result.success) {
    // console.log("error");
    // console.log(typeof result.error);
    // console.log(typeof result.error.issues);
    // console.log(result.error.issues);

    result.error.issues.forEach(({ path }) => {
      // logger.log("ERROR", `Missing environment variable ${path}`);

      // logger.log("error", `Missing environment variable ${path}`);
      logger.error(`Missing environment variable ${path}`);
    });
    process.exit(1);
    // logger.error(result.error.toString());
  }
  // console.log(process.env);
};
