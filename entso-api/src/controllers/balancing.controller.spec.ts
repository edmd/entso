import { Test, TestingModule } from '@nestjs/testing';
import { BalancingController } from './balancing.controller';

describe('BalancingController', () => {
  let controller: BalancingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BalancingController],
    }).compile();

    controller = module.get<BalancingController>(BalancingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
