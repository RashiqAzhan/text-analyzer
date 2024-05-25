import { Body, Controller, Get, Post } from "@nestjs/common";
import { TextAnalyzerService } from "src/text-analyzer/text-analyzer.service";

@Controller("text-analyzer")
export class TextAnalyzerController {
  constructor(private readonly textAnalyzerService: TextAnalyzerService) {}

  @Get()
  landing(): string {
    return "Welcome to text-analyzer!";
  }

  @Post("word-count")
  countWords(@Body() body: { text: string }): string {
    return this.textAnalyzerService.wordCount(body.text);
  }

  @Post("character-count")
  countCharacters(@Body() body: { text: string }): string {
    return this.textAnalyzerService.characterCount(body.text);
  }

  @Post("sentence-count")
  countSentences(@Body() body: { text: string }): string {
    return this.textAnalyzerService.sentenceCount(body.text);
  }

  @Post("paragraph-count")
  countParagraphs(@Body() body: { text: string }): string {
    return this.textAnalyzerService.paragraphCount(body.text);
  }

  @Post("longest-words")
  findLongestWords(@Body() body: { text: string }): string[] {
    return this.textAnalyzerService.longestWords(body.text);
  }
}
