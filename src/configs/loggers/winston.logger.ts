import winston, { info } from "winston";

const { combine, timestamp, cli, colorize, align, json, printf } =
  winston.format;

// const logLevels = {
//   ERROR: 0,
//   INFO: 1,
//   DEBUG: 2,
//   WARN: 3,
//   LOG: 4,
// };

const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
  },
  colors: {
    error: "red",
    warn: "yellow",
    info: "cyan",
    http: "magenta",
    debug: "white",
  },
};

winston.addColors(customLevels.colors);

export const logger = winston.createLogger({
  levels: customLevels.levels,
  level: "http",
  // format: winston.format.cli(),
  format: combine(
    colorize({ all: true }),
    // timestamp({ format: "DD-MM-YYYY hh:mm:ss.SSS A" }),
    timestamp(),
    align(),
    // cli(),
    printf((info) => {
      const upperLevel = info.level.toUpperCase();
      // info.level = info.level.toUpperCase();
      // console.log(typeof info.level);
      // console.log(typeof upperLevel);
      // console.log(upperLevel);
      // console.log(info.level);
      // console.log(info.level.toUpperCase());

      return `[${info.timestamp}] ${info.level}: ${info.message.trim()}`;
    })
  ),
  transports: [new winston.transports.Console()],
});

export const httpLogger = winston.createLogger({
  level: "http",
  format: combine(
    colorize({ all: true }),
    timestamp(),
    printf((info) => {
      const upperLevel = info.level.toUpperCase();
      // info.level = info.level.toUpperCase();
      // console.log(typeof info.level);
      // console.log(typeof upperLevel);
      // console.log(upperLevel);
      // console.log(info.level);
      // console.log(info.level.toUpperCase());

      return `[${info.timestamp}] ${info.level}: ${info.message.trim()}`;
    })
  ),
  transports: [new winston.transports.Console()],
});
