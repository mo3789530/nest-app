# Middleware  
ミドルウェアは、routeハンドラの前に呼び出される関数。リクエストとレスポンスにアクセスすることができる。ミドルウェアは通常nextという名前で変数名を表す。

ミドルウェアはNestMiddlewareを継承したクラスで`@Injectable()`である。

```
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LooggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...');
    next();
  }
}

```

app.moduleでConfigureに登録することで利用可能になる。

```
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LooggerMiddleware } from './loogger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LooggerMiddleware)
    .forRoutes('cats');
  }
}

```