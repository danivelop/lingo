import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('chat')
  async chat(@Body() body: { message: string }): Promise<{ reply: string }> {
    return this.appService.processChat(body.message);
  }
} 