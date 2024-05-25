import { Injectable } from "@nestjs/common";

@Injectable()
export class TextAnalyzerService {
  private paragraphRegex = new RegExp(/\n+?|\r?\n/g);

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

  paragraphCount(text: string): string {
    return text
      .trim()
      .split(this.paragraphRegex)
      .filter(Boolean)
      .length.toString();
  }

  longestWords(text: string): string[] {
    return text
      .trim()
      .split(this.paragraphRegex)
      .filter(Boolean)
      .map((paragraph) =>
        paragraph
          .split(/\s+/g)
          .map((word) => word.replace(/\W/g, ""))
          .reduce(
            (longestWords: string[], currentWord) =>
              (longestWords.at(0)?.length ?? 0) > currentWord.length ?
                longestWords
              : longestWords.at(0)?.length === currentWord.length ?
                [...longestWords, currentWord]
              : [currentWord],
            [],
          ),
      )
      .flat();
  }
}
