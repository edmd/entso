import { Module } from '@nestjs/common';
import { EntsoService } from './services/entso.service';
import { BalancingController } from './controllers/balancing.controller';

@Module({
  imports: [],
  controllers: [BalancingController],
  providers: [EntsoService],
})
export class AppModule {}
