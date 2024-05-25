import { Injectable } from "@nestjs/common";

@Injectable()
export class TextAnalyzerService {
  wordCount(text: string): string {
    return text.trim().split(/\s+/gm).filter(Boolean).length.toString();
  }

  characterCount(text: string): string {
    return text.trim().replaceAll(/\s+/g, "").length.toString();
  }

  sentenceCount(text: string): string {
    return (
      text.trim().match(/\S\.(?!\.)|\S\?(?!\?)|\S!(?!!)|\S:(?!:)|\S;(?!;)/g)
        ?.length ?? 0
    ).toString();
  }
}
