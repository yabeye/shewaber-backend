import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: '🤗 💰 Hello, From ShewaBer API',
      developed_by: 'Yeabsera Bekele, March-1, 2023',
    };
  }
}
