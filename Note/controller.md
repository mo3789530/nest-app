# controller 
コントローラーの目的はアプリケーションに対する特定の要求を受け取ることです。
routingはどのコントローラーがどの要求を受信するかを制御します。
多くの場合、書くコントローラーには複数にrouteがあり、routeごとに異なるアクションを実行することができます。

コントローラーを作成するために、クラスとでコレータを用いります。
でコレータはクラスを必要なメタデータに関連付け、Nestがルーティングマップを作成します。

# Routing
Controllerを作成する時は`nest g controller contoller-name`で作成できます。

作成されたコントローラー
``` cat.controller.ts
import { Controller } from '@nestjs/common';

@Controller('cats')
export class CatsController {}
```

コントローラーを定義するために、`@Controller()`というでコレータを使用します。`@Controller('cats')`と書くことにによりcatsコントローラーにマッピングされます。
ただし、今の状態ではPOSTもGETも容易されていません。
この状態で`http://localhost:3000/cats`にアクセスすると`{"statusCode":404,"error":"Not Found","message":"Cannot GET /cats"}`　となり404が返ってきます。
そこで以下のように追加してみました。
これにより`http://localhost:3000/cats`にアクセスした場合は404ではなく`This cation retunrs all cats`という文字列が返ってきます。

```
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() requrest: Request ): string {
    return 'This cation retunrs all cats';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return 'This action return a #${params.id} cat';
  }

  @Post()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cats';
  }
}

```
リクエストに対してのデコレータは用意されているので場合によって使い分けることができる。
```
@Request()	req
@Response()	res
@Next()	next
@Session()	req.session
@Param(key?: string)	req.params / req.params[key]
@Body(key?: string)	req.body / req.body[key]
@Query(key?: string)	req.query / req.query[key]
@Headers(name?: string)	req.headers / req.headers[name]
```

コントローラーを作成した場合は`app.modle.ts`でインスタンス化する必要がある。
今回はcliツールを利用してるため自動で行われているが
```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}

```

このように
```
  controllers: [AppController, CatsController],
```
`controllers`に`CatsController`が追加されている