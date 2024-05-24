import { Controller, Get } from "@nestjs/common";

@Controller("text-analyzer")
export class TextAnalyzerController {
  @Get()
  getHello(): string {
    return "you've reached text-analyzer";
  }
}
