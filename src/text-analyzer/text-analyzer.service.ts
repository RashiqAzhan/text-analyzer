import { Injectable } from "@nestjs/common";

@Injectable()
export class TextAnalyzerService {
  wordCount(text: string): string {
    return text.trim().split(/\s+/gm).filter(Boolean).length.toString();
  }

  characterCount(text: string): string {
    return "0";
  }
}
