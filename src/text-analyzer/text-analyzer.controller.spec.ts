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

  it("should return a message", () => {
    expect(controller.getLanding()).toMatch(/\s+/g);
  });

  it("should count the number of words in a sentence", () => {
    expect(controller.countWords({ text: testSentence })).toBe("16");
  });

  it("should count the number of characters in a sentence", () => {
    expect(controller.countCharacters({ text: testSentence })).toBe("60");
  });

  it("should count the number of sentences in a sentence", () => {
    expect(controller.countSentences({ text: testSentence })).toBe("2");
  });

  it("should count the number of paragraphs in a sentence", () => {
    expect(controller.countParagraphs({ text: testSentence })).toBe("1");
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
