import { Test, TestingModule } from '@nestjs/testing';
import { PrintLogsResolver } from './print.logs.resolver';
import { PrintLogsService } from './print.logs.service';

describe('PrintLogsResolver', () => {
  let resolver: PrintLogsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrintLogsResolver, PrintLogsService],
    }).compile();

    resolver = module.get<PrintLogsResolver>(PrintLogsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
