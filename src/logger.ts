//? Read more about winston: https://www.npmjs.com/package/winston
import { Logger } from 'winston';

import developmentLogger from 'src/config/logger/development-logger.config';
import productionLogger from 'src/config/logger/production-logger.config';
import { DEVELOPMENT, PRODUCTION } from 'src/common/constants/constants.index';

let logger: Logger = null;

// TODO: Replace with the actual process .env
logger = developmentLogger();

// const NODE_ENV = DEVELOPMENT;
// const NODE_ENV = PRODUCTION;

// if (NODE_ENV !== DEVELOPMENT) {
//   logger = developmentLogger();
// } else if (NODE_ENV === PRODUCTION) {
//   logger = productionLogger();
// }

export default logger;
