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

    it("should count characters for multiple paragraphs", () => {
      expect(service.characterCount(testMultipleParagraphs)).toEqual("771");
    });
  });

  describe("sentenceCount", () => {
    it("should be defined", () => {
      expect(typeof service.sentenceCount).toBe("function");
    });

    it("should count sentence for a sentence", () => {
      expect(service.sentenceCount(testSentence)).toEqual("1");
    });

    it("should count 0 for empty", () => {
      expect(service.sentenceCount(testEmpty)).toEqual("0");
    });

    it("should count 0 for whitespace", () => {
      expect(service.sentenceCount(testWhitespace)).toEqual("0");
    });

    it("should count 0 for whitespaces", () => {
      expect(service.sentenceCount(testWhitespaces)).toEqual("0");
    });

    it("should count 0 for blank lines", () => {
      expect(service.sentenceCount(testBlankLines)).toEqual("0");
    });

    it("should count sentences for period (.)", () => {
      expect(
        service.sentenceCount(
          "Period ( . ):\n" +
            "\n" +
            "The stars shimmered in the night sky.\n" +
            "After a long day of work, she finally sat down to rest.\n" +
            "With a flick of his wand, the magician vanished in a puff of smoke.",
        ),
      ).toEqual("4");
    });

    it("should count sentences for question mark (?)", () => {
      expect(
        service.sentenceCount(
          "Question Mark ( ? ):\n" +
            "\n" +
            "Who dares to challenge the mighty dragon?\n" +
            "Will you accompany me on this perilous journey?\n" +
            "What lies beyond the edge of the world?",
        ),
      ).toEqual("4");
    });

    it("should count sentences for exclamation point ( ! )", () => {
      expect(
        service.sentenceCount(
          "Exclamation Point ( ! ):\n" +
            "\n" +
            "Look out! The bridge is collapsing!\n" +
            "Hurry! We must reach the castle before nightfall!\n" +
            "Wow! That was the most incredible magic trick I've ever seen!",
        ),
      ).toEqual("7");
    });

    it("should count sentences for comma ( , )", () => {
      expect(
        service.sentenceCount(
          "Comma ( , ):\n" +
            "\n" +
            "The sun, shining brightly, illuminated the path ahead.\n" +
            "She laughed, a joyous sound that echoed through the forest.\n" +
            "With a gentle nod, he acknowledged her presence.",
        ),
      ).toEqual("4");
    });

    it("should count sentences for semicolon ( ; )", () => {
      expect(
        service.sentenceCount(
          "Semicolon ( ; ):\n" +
            "\n" +
            "Life is a journey; embrace the unknown.\n" +
            "Love is a battlefield; we must fight for what we believe in.\n" +
            "Time heals all wounds; we must be patient and persevere.",
        ),
      ).toEqual("7");
    });

    it("should count sentences for colon ( : )", () => {
      expect(
        service.sentenceCount(
          "Colon ( : ):\n" +
            "\n" +
            "The rules are simple: follow the path and you will find your way.\n" +
            "There is only one option left: we must confront our fears head-on.\n" +
            "He had one goal in mind: to reach the summit and claim victory.",
        ),
      ).toEqual("7");
    });

    it("should count sentences for em dash ( — )", () => {
      expect(
        service.sentenceCount(
          "Em Dash ( — ):\n" +
            "\n" +
            "The storm — fierce and unrelenting — raged on into the night.\n" +
            "She couldn't believe what she saw — a dragon, soaring through the sky.\n" +
            "His words — filled with anger and resentment — cut deep into her soul.",
        ),
      ).toEqual("4");
    });

    it("should count sentences for en dash ( – )", () => {
      expect(
        service.sentenceCount(
          "En Dash ( – ):\n" +
            "\n" +
            "The years 2000–2020 were filled with both triumphs and challenges.\n" +
            "The journey from London–Paris was a scenic adventure through the countryside.\n" +
            "The temperature ranged from 20–30 degrees Celsius throughout the day.",
        ),
      ).toEqual("4");
    });

    it("should count sentences for hyphen ( - )", () => {
      expect(
        service.sentenceCount(
          "Hyphen ( - ):\n" +
            "\n" +
            "She was a well-known writer-turned-activist.\n" +
            "The once-in-a-lifetime opportunity was too good to pass up.\n" +
            "He had a larger-than-life personality that captivated everyone he met.",
        ),
      ).toEqual("4");
    });

    it("should count sentences for parentheses ( )", () => {
      expect(
        service.sentenceCount(
          "Parentheses ( ):\n" +
            "\n" +
            "The bird (a majestic eagle) soared high above the mountains.\n" +
            "His story (though fascinating) was filled with half-truths and exaggerations.\n" +
            "We will meet at the usual spot (behind the old oak tree) at noon.",
        ),
      ).toEqual("4");
    });

    it("should count sentences for brackets [ ]", () => {
      expect(
        service.sentenceCount(
          "Brackets [ ]:\n" +
            "\n" +
            "The ship [a majestic schooner] sailed into the harbour.\n" +
            "His words [spoken with conviction] resonated with the crowd.\n" +
            "She reached for the book [tattered and worn] on the dusty shelf.",
        ),
      ).toEqual("4");
    });

    it("should count sentences for braces { }", () => {
      expect(
        service.sentenceCount(
          "Braces { }:\n" +
            "\n" +
            "The recipe {a family secret} was passed down through generations.\n" +
            "His plan {bold and ambitious} was met with skepticism by his peers.\n" +
            "The painting {a masterpiece of modern art} sold for millions at auction.",
        ),
      ).toEqual("4");
    });

    it("should count sentences for apostrophe ( ‘ )", () => {
      expect(
        service.sentenceCount(
          "Apostrophe ( ‘ ):\n" +
            "\n" +
            "It's a beautiful day to go for a walk in the park.\n" +
            "She's been working hard all week to prepare for the presentation.\n" +
            "He's going to be late for dinner if he doesn't hurry up.",
        ),
      ).toEqual("4");
    });

    it("should count sentences for quotation marks (“ ”)", () => {
      expect(
        service.sentenceCount(
          "Quotation Marks (“ ”):\n" +
            "\n" +
            '"To be or not to be, that is the question," said Hamlet.\n' +
            '"I have a dream," declared Martin Luther King "that one day, all men will be treated as equals."\n' +
            '"The only thing we have to fear," stated Roosevelt, "is fear itself."',
        ),
      ).toEqual("4");
    });

    it("should count sentences for single quotation marks (‘ ’)", () => {
      expect(
        service.sentenceCount(
          "Single Quotation Marks (‘ ’):\n" +
            "\n" +
            "'The road to hell,' she muttered under her breath, 'is paved with good intentions.'\n" +
            "'Life is what happens when you're busy making other plans,' he quoted, 'so live in the moment.'\n" +
            "'To thine own self be true,' Shakespeare famously wrote, 'and it must follow, as the night the day, thou canst not then be false to any man.'",
        ),
      ).toEqual("4");
    });
  });
});
