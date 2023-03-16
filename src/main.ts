import { NestFactory } from '@nestjs/core';

import { AppModule } from 'src/app.module';
import { listAllRoutes } from 'src/common/helpers/helpers.index';
import { PORT } from 'src/common/constants/env.constants';
import logger from 'src/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  await app.listen(PORT, () => {
    logger.info(`App is running on port ${PORT} ...`);
    listAllRoutes(app);
  });
}
bootstrap();
