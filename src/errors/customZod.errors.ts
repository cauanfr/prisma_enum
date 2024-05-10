import { z } from "zod";

// NAO É NECESSARIO, DA PRA PASSAR UMA MENSAGEM DIRETO NO SCHEMA
export const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_string) {
    if (issue.path.includes("licensePlate")) {
      return {
        message:
          "License plate has an invalid format. It must be in `AAA-1111` format.",
      };
    }
  }
  // if (issue.code === z.ZodIssueCode.custom) {
  //   return { message: `less-than-${(issue.params || {}).minimum}` };
  // }
  return { message: ctx.defaultError };
};
