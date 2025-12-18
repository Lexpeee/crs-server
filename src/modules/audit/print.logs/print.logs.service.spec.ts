import { Test, TestingModule } from '@nestjs/testing';
import { PrintLogsService } from './print.logs.service';

describe('PrintLogsService', () => {
  let service: PrintLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrintLogsService],
    }).compile();

    service = module.get<PrintLogsService>(PrintLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
