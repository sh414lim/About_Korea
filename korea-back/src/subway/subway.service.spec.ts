import { Test, TestingModule } from '@nestjs/testing';
import { SubwayService } from './subway.service';

describe('SubwayService', () => {
  let service: SubwayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubwayService],
    }).compile();

    service = module.get<SubwayService>(SubwayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
