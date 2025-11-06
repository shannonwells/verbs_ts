import * as Suffix from "./suffix";
import * as ConjugateBe from "./conjugate_be";
import * as ConjugateHave from "./conjugate_have";
import { ConjugationOptions } from "./conjugate_have";

export function conjugate(infinitive: string, options: ConjugationOptions): string {
  switch (options.tense) {
    case "past":
      return past(infinitive);
    case "past_perfect":
      return pastPerfect(infinitive, options);
    case "present_progressive":
      return presentProgressive(infinitive, options);
    case "past_progressive":
      return pastProgressive(infinitive, options);
    case "present":
      return present(infinitive, options);
    case "future":
      return "will " + infinitive;
    default:
      return infinitive;
  }
}

export function present(infinitive: string, options: ConjugationOptions): string {
  if (options.person === "third") {
    return thirdPresent(infinitive, options.plurality);
  }
  return infinitive;
}

function past(infinitive: string): string {
  return Suffix.withEd(infinitive);
}

function presentProgressive(infinitive: string, options: ConjugationOptions): string {
  const mergedOptions = { ...options, tense: "present" };
  return ConjugateBe.conjugate(mergedOptions) + " " + Suffix.withIng(infinitive);
}

function pastProgressive(infinitive: string, options: ConjugationOptions): string {
  const mergedOptions = { ...options, tense: "past" };
  return ConjugateBe.conjugate(mergedOptions) + " " + Suffix.withIng(infinitive);
}

function pastPerfect(infinitive: string, options: ConjugationOptions): string {
  const mergedOptions = { ...options, tense: "past" };
  return ConjugateHave.conjugate(mergedOptions) + " " + past(infinitive);
}

function thirdPresent(infinitive: string, plurality?: string): string {
  if (plurality === "singular") {
    return Suffix.withS(infinitive);
  }
  return infinitive;
}
