import { Body, Controller, Get, Post } from "@nestjs/common";
import { TextAnalyzerService } from "src/text-analyzer/text-analyzer.service";

@Controller("text-analyzer")
export class TextAnalyzerController {
  constructor(private readonly textAnalyzerService: TextAnalyzerService) {}

  @Get()
  getHello(): string {
    return "you've reached text-analyzer";
  }

  @Post()
  analyzeText(@Body() body: { text: string }): string {
    console.log(body);
    return "you've reached text-analyzer";
  }

  @Post("word-count")
  countWords(@Body() body: { text: string }): string {
    return this.textAnalyzerService.wordCount(body.text);
  }
}
