import { Test, TestingModule } from "@nestjs/testing";
import { TextAnalyzerController } from "src/text-analyzer/text-analyzer.controller";
import { TextAnalyzerService } from "src/text-analyzer/text-analyzer.service";

describe("TextAnalyzerController", () => {
  let controller: TextAnalyzerController;
  const testSentence =
    "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";

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

  it("should count the number of words in a sentence", () => {
    const result = controller.countWords({ text: testSentence });
    expect(result).toBe("16");
  });

  it("should count the number of characters in a sentence", () => {
    const result = controller.countCharacters({ text: testSentence });
    expect(result).toBe("60");
  });

  it("should count the number of sentences in a sentence", () => {
    const result = controller.countSentences({ text: testSentence });
    expect(result).toBe("2");
  });

  it("should count the number of paragraphs in a sentence", () => {
    const result = controller.countParagraphs({ text: testSentence });
    expect(result).toBe("1");
  });

  it("should find the longest words in a sentence", () => {
    expect(controller.findLongestWords({ text: testSentence })).toEqual([
      "quick",
      "brown",
      "jumps",
      "slept",
    ]);
  });
});
