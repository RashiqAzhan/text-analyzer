import { Test, TestingModule } from "@nestjs/testing";
import { TextAnalyzerService } from "src/text-analyzer/text-analyzer.service";

describe("TextAnalyzerService", () => {
  let service: TextAnalyzerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextAnalyzerService],
    }).compile();

    service = module.get<TextAnalyzerService>(TextAnalyzerService);
  });

  describe("wordCount", () => {
    it("should be defined", () => {
      expect(service).toBeDefined();
    });

    it("should count words for a sentence", () => {
      expect(
        service.wordCount(
          "In the vast digital realm, where words jostle for attention and algorithms reign supreme, mastering the art of SEO content creation is akin to navigating a labyrinth.",
        ),
      ).toEqual("27");
    });

    it("should count 0 for empty", () => {
      expect(service.wordCount("")).toEqual("0");
    });

    it("should count 0 for whitespace", () => {
      expect(service.wordCount(" ")).toEqual("0");
    });

    it("should count 0 for whitespaces", () => {
      expect(service.wordCount("            ")).toEqual("0");
    });

    it("should count 0 for blank lines", () => {
      expect(service.wordCount("\n\n\n")).toEqual("0");
    });

    it("should count words for multiple paragraphs", () => {
      expect(
        service.wordCount(
          "Introduction\n" +
            "\n" +
            "In the vast digital realm, where words jostle for attention and algorithms reign supreme, mastering the art of SEO content creation is akin to navigating a labyrinth. Yet, amidst the sea of bland and formulaic content, there exists a secret weapon: humour. Yes, you heard it right! Injecting a dash of wit and charm into your SEO content can work wonders, capturing the elusive attention of both readers and search engines alike.\n" +
            "\n" +
            "Why Humour Works\n" +
            "\n" +
            "Haven't we all fallen prey to the irresistible allure of a well-crafted joke? Humour taps into the very essence of human psychology, invoking laughter, releasing endorphins, and forging an instant connection between the reader and the content. It transcends barriers, breaking down walls of resistance and fostering a sense of camaraderie. In the realm of SEO, where engagement is king, humour reigns supreme as the ultimate tool for captivating audiences." +
            "\n",
        ),
      ).toEqual("146");
    });
  });
});
