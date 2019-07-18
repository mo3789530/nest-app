# Module
各アプリケーションには、少なくとも１つのモジュールがある。ルートモジュールはNestがアプリケーショングラフの作成に使用する最初の箇所である。小さなアプリケーションではルートモジュールしかないかもしれませんが、大きなアプリケーションではコンポーネントを整理する効果的な方法としてモジュールを利用することが推奨されている。

`@Module`デコレータは単一のオブジェクトを受け取る。

 - providers  
   Nestによってインスタンス化され、このモジュールで共有される可能性のあるプロバイダ
 - controllers 
　　インスタンス化する必要のあるコントローラー
 - imports
  このモジュールで必要とされるプロバイダをインポートされたモジュールのリスト
 - exports
　　このモジュールをインポートする他のモジュールで利用可能であるべきプロバイダをセット

### Feature Module  
CatsControllerとCatsServiceは同じドメインに属している。
kono
2つは密接に関連しているのでルートモジュールから機能モジュールに分割することができる

`nest g module cats`
```
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}

```

そして機能を分割したことにより`app.module`も整理することができる

```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

### Shared modules
Nestではモジュールはデフォルトでシングルトンである。複数のモジュールで任意のプロバイダの同じインスタンスを共有することができる。
CatsServiceを他のモジュールでも共有したい場合は、exportにCatsServiceを追加する

```
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatsModule {}

```