# Providers
プロバイダはNestの基本コンセプトで、サービス、リポジトリ、ファクトリ、ヘルパーなどをプロバイダとして扱うことができる。
プロバイダの主な考え方は依存性の注入(DI)できること。
プロバイダは`@Injectable()`のデコレーションがアノテートされたただのクラス。
オブジェクトの様々な関係を作成、オブジェクトのインスタンスを結ぶ機能はNestのランタイムに大部分移譲することができる。

``` sample 
import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
```