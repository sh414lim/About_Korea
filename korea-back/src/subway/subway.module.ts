import { Module } from '@nestjs/common';
import { SubwayService } from './subway.service';

@Module({
  providers: [SubwayService]
})
export class SubwayModule {}
