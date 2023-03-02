import * as winston from 'winston';

const { createLogger, format, transports } = winston;
const { combine, timestamp, printf } = format;

// Production logger configs.
const productionLoggerFormat = printf(({ level, message, timestamp }) => {
  return `[${level}] - ${timestamp} : ${message}`;
});

const productionLogger = () => {
  return createLogger({
    level: 'info',
    format: combine(timestamp(), productionLoggerFormat),
    transports: [
      new transports.Console(),
      new winston.transports.File({
        filename: 'logs/errors.log',
        level: 'error',
      }),
      new winston.transports.File({
        filename: 'logs/warnings-and-errors.log',
        level: 'warn',
      }),
    ],
  });
};

export default productionLogger;
