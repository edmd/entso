import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class EntsoService {
  private API_KEY = process.env.SECURITY_TOKEN;

  async getEnergyPrices(
    acquiring_Domain: string,
    connecting_Domain: string,
    periodStart: string,
    periodEnd: string,
  ) {
    const url = `https://web-api.tp.entsoe.eu/api?documentType=A88&acquiring_Domain=${acquiring_Domain}&connecting_Domain=${connecting_Domain}&periodStart=${periodStart}&periodEnd=${periodEnd}&securityToken=${this.API_KEY}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch energy prices',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
