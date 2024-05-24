import { Module } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { AppService } from "src/app.service";
import { TextAnalyzerController } from "src/text-analyzer/text-analyzer.controller";
import { TextAnalyzerService } from "src/text-analyzer/text-analyzer.service";

@Module({
  imports: [],
  controllers: [AppController, TextAnalyzerController],
  providers: [AppService, TextAnalyzerService],
})
export class AppModule {}
