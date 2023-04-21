import { BadGatewayException, Controller, Get, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { Response } from 'express';

@Controller('commits')
export class CommitsController {
  constructor(
    private commitsService: CommitsService
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getCommits(@Res() res: Response) {
    try {
      const data = await this.commitsService.getCommits();

      return res.json({data});
    } catch (error) {
      return res.status(error.response.status).json(error.response.data)
    }
  }
}
