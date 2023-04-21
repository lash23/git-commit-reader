import { Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/axios";
import { CommitsController } from './commits.controller';

@Module({
  controllers: [CommitsController],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    })
  ]
})
export class CommitsModule {}
