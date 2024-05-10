import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ApiError } from "./api.errors";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { logger } from "../configs/loggers/winston.logger";

class HandleErrorsMiddleware {
  public static execute = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response => {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    if (error instanceof JsonWebTokenError) {
      if (error instanceof TokenExpiredError) {
        return res.status(401).json({ error: "This JWT has expired." });
      }

      if (error.message === "invalid signature") {
        return res
          .status(401)
          .json({ error: "This JWT has an invalid signature." });
      }

      console.log(error);

      return res.status(401).json({ error: error.message });
    }

    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.flatten().fieldErrors });
      // FOR TESTING
      // return res.status(400).json({
      //   errors: {
      //     model: ["Required"],
      //     licensePlate: ["Required", "xptoZZZZ"],
      //     // ABCD: ["Required"],
      //   },
      // });
    }

    // logger.error(error.message);
    logger.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
    // NEVER DO THIS ON PRODUCTION!!!!
    // return res.status(500).json({ error });
  };
}

export const handleErrors = HandleErrorsMiddleware.execute;
