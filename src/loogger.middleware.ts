import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LooggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...');
    next();
  }
}
