import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { AppController } from "src/app.controller";
import { AppService } from "src/app.service";
import { TextAnalyzerController } from "src/text-analyzer/text-analyzer.controller";
import { TextAnalyzerService } from "src/text-analyzer/text-analyzer.service";

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        name: "short",
        ttl: 1000,
        limit: 3,
      },
      {
        name: "medium",
        ttl: 10000,
        limit: 20,
      },
      {
        name: "long",
        ttl: 60000,
        limit: 100,
      },
    ]),
  ],
  controllers: [AppController, TextAnalyzerController],
  providers: [
    AppService,
    TextAnalyzerService,
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AppModule {}
