import { INestApplication } from '@nestjs/common';

import logger from 'src/logger';

// To list out the available routes !
// Only for dev env: Helps us easily debugging the app.

export const listAllRoutes = (app: INestApplication) => {
  const server = app.getHttpServer();
  const router = server._events.request._router;

  logger.debug('-------------👨‍👩‍👧‍👦 All routes in the app----------------');
  const _: [] = router.stack
    .map((routeObj: any) => {
      if (routeObj.route) {
        return {
          route: {
            path: routeObj.route?.path,
            method: routeObj.route?.stack[0].method,
          },
        };
      }
    })
    .filter((item: object) => {
      if (item !== undefined) {
        logger.debug(JSON.stringify(item));
        return true;
      } else {
        return false;
      }
    });
  logger.debug('-----------------------------------------------------------');
  // logger.debug(JSON.stringify(_));
};
