import * as ConjugateHave from "./conjugate_have";
import { ConjugationOptions } from "./conjugate_have";

export function conjugate(options: ConjugationOptions): string {
  switch (options.tense) {
    case "present":
      return present(options);
    case "past":
      return past(options);
    case "past_perfect":
      return pastPerfect(options);
    case "past_progressive":
      return pastProgressive(options);
    case "future":
      return future();
    default:
      return "be";
  }
}

function present(options: ConjugationOptions): string {
  if (options.plurality === "singular") {
    return presentSingular(options.person);
  }
  return "are";
}

function past(options: ConjugationOptions): string {
  if (options.plurality === "singular") {
    return pastSingular(options.person);
  }
  return "were";
}

function pastPerfect(options: ConjugationOptions): string {
  const mergedOptions = { ...options, tense: "past" };
  return ConjugateHave.conjugate(mergedOptions) + " been";
}

function pastProgressive(options: ConjugationOptions): string {
  const mergedOptions = { ...options, tense: "past" };
  return conjugate(mergedOptions) + " being";
}

function future(): string {
  return "will be";
}

function presentSingular(person?: string): string {
  switch (person) {
    case "first":
      return "am";
    case "second":
      return "are";
    default:
      return "is";
  }
}

function pastSingular(person?: string): string {
  if (person === "second") {
    return "were";
  }
  return "was";
}
