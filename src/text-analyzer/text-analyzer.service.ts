import { Injectable } from "@nestjs/common";

@Injectable()
export class TextAnalyzerService {
  wordCount(text: string): string {
    return text.trim().split(/\s+/).filter(Boolean).length.toString();
  }
}
