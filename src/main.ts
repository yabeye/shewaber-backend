import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { listAllRoutes } from './common/helpers/helpers.index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  await app.listen(3000);

  listAllRoutes(app);
}
bootstrap();
