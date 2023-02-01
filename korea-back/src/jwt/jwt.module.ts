import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { JwtController } from './jwt.controller';

@Module({
  providers: [JwtService],
  controllers: [JwtController]
})
export class JwtModule {}
