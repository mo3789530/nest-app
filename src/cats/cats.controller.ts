import { Controller, Get, Req, Post, Header, Param } from '@nestjs/common';
import { Request } from 'express';
import { create } from 'domain';

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
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cats';
  }
}
