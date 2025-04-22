import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the AI English Conversation API';
  }

  async processChat(message: string): Promise<{ reply: string }> {
    // 여기에 AI 영어 회화 처리 로직이 들어갈 예정
    console.log('Received message:', message);
    
    // 임시 응답
    return {
      reply: `This is a temporary response to your message: "${message}". The actual AI conversation will be implemented soon.`,
    };
  }
} 