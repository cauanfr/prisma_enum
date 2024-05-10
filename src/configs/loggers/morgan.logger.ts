import morgan from "morgan";
import { logger, httpLogger } from "./winston.logger";

// export const morganLogger = morgan("dev", {
export const morganLogger = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  {
    stream: {
      // write: (message) => httpLogger.http(message),
      // write: (message) => logger.info(message),
      write: (message) => logger.http(message),
    },
  }
);
