import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GitApiModule } from "../modules/git-api/git-api.module";

@Module({
  imports: [GitApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
