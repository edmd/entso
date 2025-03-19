import { Controller, Get, Query } from '@nestjs/common';
import { EntsoService } from '../services/entso.service';

@Controller('balancing')
export class BalancingController {
  constructor(private readonly entsoService: EntsoService) {}

  @Get()
  async fetchPrices(
    @Query('acquiring_Domain') acquiring_Domain: string,
    @Query('connecting_Domain') connecting_Domain: string,
    @Query('periodStart') periodStart: string,
    @Query('periodEnd') periodEnd: string,
  ) {
    return this.entsoService.getEnergyPrices(
      acquiring_Domain,
      connecting_Domain,
      periodStart,
      periodEnd,
    );
  }
}
