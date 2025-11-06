import * as ConjugateBe from "./conjugate_be";
import * as ConjugateHave from "./conjugate_have";
import * as ConjugateRegular from "./conjugate_regular";
import * as ConjugateIrregular from "./conjugate_irregular";
import { ConjugationOptions } from "./conjugate_have";

/**
 * Conjugate an English verb according to the specified options
 * @param infinitive - The base form of the verb
 * @param options - Conjugation options including tense, person, and plurality
 * @returns The conjugated verb form
 *
 * @example
 * conjugate("play", { tense: "past", person: "first", plurality: "singular" })
 * // returns "played"
 */
export function conjugate(infinitive: string, options: ConjugationOptions): string {
  // Check for capitalized form (e.g., "Play")
  if (/^[A-Z][a-z]+/.test(infinitive)) {
    return conjugateCapitalized(infinitive, options);
  }
  // Check for all caps form (e.g., "PLAY")
  if (/^[A-Z]+$/.test(infinitive)) {
    return conjugateAllCaps(infinitive, options);
  }
  // Default lowercase handling
  return conjugateInternal(infinitive, options);
}

function conjugateCapitalized(infinitive: string, options: ConjugationOptions): string {
  const lowercased = infinitive.toLowerCase();
  const conjugated = conjugateInternal(lowercased, options);
  return capitalize(conjugated);
}

function conjugateAllCaps(infinitive: string, options: ConjugationOptions): string {
  const lowercased = infinitive.toLowerCase();
  const conjugated = conjugateInternal(lowercased, options);
  return conjugated.toUpperCase();
}

function conjugateInternal(infinitive: string, options: ConjugationOptions): string {
  // Handle special cases
  if (infinitive === "have") {
    return ConjugateHave.conjugate(options);
  }
  if (infinitive === "be") {
    return ConjugateBe.conjugate(options);
  }

  // Check if irregular verb
  if (ConjugateIrregular.isIrregular(infinitive)) {
    return ConjugateIrregular.conjugate(infinitive, options);
  }

  // Default to regular conjugation
  return ConjugateRegular.conjugate(infinitive, options);
}

function capitalize(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
