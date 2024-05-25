import { Test, TestingModule } from "@nestjs/testing";
import { TextAnalyzerService } from "src/text-analyzer/text-analyzer.service";

describe("TextAnalyzerService", () => {
  let service: TextAnalyzerService;
  const testSentence = `In the vast digital realm, where words jostle for attention and algorithms reign supreme, mastering the art of SEO content creation is akin to navigating a labyrinth.`;
  const testEmpty = "";
  const testWhitespace = " ";
  const testWhitespaces = " ".repeat(10);
  const testBlankLines = "\n".repeat(3);
  const testMultipleParagraphs =
    "Introduction\n" +
    "\n" +
    "In the vast digital realm, where words jostle for attention and algorithms reign supreme, mastering the art of SEO content creation is akin to navigating a labyrinth. Yet, amidst the sea of bland and formulaic content, there exists a secret weapon: humour. Yes, you heard it right! Injecting a dash of wit and charm into your SEO content can work wonders, capturing the elusive attention of both readers and search engines alike.\n" +
    "\n" +
    "Why Humour Works\n" +
    "\n" +
    "Haven't we all fallen prey to the irresistible allure of a well-crafted joke? Humour taps into the very essence of human psychology, invoking laughter, releasing endorphins, and forging an instant connection between the reader and the content. It transcends barriers, breaking down walls of resistance and fostering a sense of camaraderie. In the realm of SEO, where engagement is king, humour reigns supreme as the ultimate tool for captivating audiences." +
    "\n";

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextAnalyzerService],
    }).compile();

    service = module.get<TextAnalyzerService>(TextAnalyzerService);
  });

  describe("wordCount", () => {
    it("should be defined", () => {
      expect(typeof service.wordCount).toBe("function");
    });

    it("should count words for a sentence", () => {
      expect(service.wordCount(testSentence)).toEqual("27");
    });

    it("should count 0 for empty", () => {
      expect(service.wordCount(testEmpty)).toEqual("0");
    });

    it("should count 0 for whitespace", () => {
      expect(service.wordCount(testWhitespace)).toEqual("0");
    });

    it("should count 0 for whitespaces", () => {
      expect(service.wordCount(testWhitespaces)).toEqual("0");
    });

    it("should count 0 for blank lines", () => {
      expect(service.wordCount(testBlankLines)).toEqual("0");
    });

    it("should count words for multiple paragraphs", () => {
      expect(service.wordCount(testMultipleParagraphs)).toEqual("146");
    });
  });

  describe("characterCount", () => {
    it("should be defined", () => {
      expect(typeof service.characterCount).toBe("function");
    });

    it("should count characters for a sentence", () => {
      expect(service.characterCount(testSentence)).toEqual("140");
    });

    it("should count 0 for empty", () => {
      expect(service.characterCount(testEmpty)).toEqual("0");
    });

    it("should count 0 for whitespace", () => {
      expect(service.characterCount(testWhitespace)).toEqual("0");
    });

    it("should count 0 for whitespaces", () => {
      expect(service.characterCount(testWhitespaces)).toEqual("0");
    });

    it("should count 0 for blank lines", () => {
      expect(service.characterCount(testBlankLines)).toEqual("0");
    });

    it("should count words for multiple paragraphs", () => {
      expect(service.characterCount(testMultipleParagraphs)).toEqual("771");
    });
  });
});
