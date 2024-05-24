import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TextAnalyzerController } from "./text-analyzer/text-analyzer.controller";

@Module({
  imports: [],
  controllers: [AppController, TextAnalyzerController],
  providers: [AppService],
})
export class AppModule {}
