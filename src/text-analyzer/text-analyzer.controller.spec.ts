import { Test, TestingModule } from "@nestjs/testing";
import { TextAnalyzerController } from "src/text-analyzer/text-analyzer.controller";
import { TextAnalyzerService } from "src/text-analyzer/text-analyzer.service";

describe("TextAnalyzerController", () => {
  let controller: TextAnalyzerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextAnalyzerService],
      controllers: [TextAnalyzerController],
    }).compile();

    controller = module.get<TextAnalyzerController>(TextAnalyzerController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
