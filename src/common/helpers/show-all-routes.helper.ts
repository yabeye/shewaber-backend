import { INestApplication } from '@nestjs/common';

// To list out the available routes !
// Only for dev env: Helps us easily debugging the app.

export const listAllRoutes = (app: INestApplication) => {
  const server = app.getHttpServer();
  const router = server._events.request._router;
  const existingRoutes: [] = router.stack
    .map((routeObj) => {
      if (routeObj.route) {
        return {
          route: {
            path: routeObj.route?.path,
            method: routeObj.route?.stack[0].method,
          },
        };
      }
    })
    .filter((item) => item !== undefined);

  console.log('👨‍👩‍👧‍👦 All routes in the app');
  console.log(existingRoutes);
};
