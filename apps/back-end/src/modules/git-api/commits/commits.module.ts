import { Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/axios";
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';

@Module({
  controllers: [CommitsController],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    })
  ],
  providers: [CommitsService]
})
export class CommitsModule {}
