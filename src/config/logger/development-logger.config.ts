import * as winston from 'winston';

const { createLogger, format, transports } = winston;
const { combine, timestamp, printf } = format;

// Development logger configs.

// Returns an emoji for a specific log level!
const getMyDebugEmoji = (level: string) => {
  const getEmoji = (level: string): string => {
    switch (level) {
      case 'error':
        return '❌';
      case 'warn':
        return '⚠️';
      case 'info':
        return '🛈';
      case 'http':
        return '🌐';
      case 'verbose':
        return '🦜';
      case 'debug':
        return '🐛';

      default:
        return '👽';
    }
  };

  const logLevels = ['error', 'warn', 'info', 'http', 'verbose', 'debug'];
  for (let i = 0; i < logLevels.length; i++) {
    const checkingLevel = logLevels[i];
    if (level.indexOf(checkingLevel) !== -1) {
      return getEmoji(checkingLevel);
    }
  }

  return getEmoji('default');
};

const developmentLoggerFormat = printf(({ level, message, timestamp }) => {
  return `🕰️${timestamp} - ${getMyDebugEmoji(
    JSON.stringify(level),
  )}[${level}] : 📨 ${message}`;
});

const developmentLogger = () => {
  return createLogger({
    level: 'debug',
    format: combine(
      format.colorize(),
      timestamp({ format: 'hh:mm:ss' }),
      developmentLoggerFormat,
    ),
    transports: [new transports.Console()],
  });
};

export default developmentLogger;
