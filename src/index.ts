/**
 * English Verb Conjugation Library
 *
 * A TypeScript library for conjugating English verbs.
 * Handles regular verbs, irregular verbs, and special cases like "be" and "have".
 */

export { conjugate } from "./verbs";
export type { ConjugationOptions } from "./conjugate_have";

// Export utility functions for checking irregular verbs
export {
  isIrregular,
  getVerbForms,
  getPastSimple,
  getPastParticiple
} from "./irregulars";

// Export suffix utilities if needed
export {
  withEd,
  withIng,
  withS
} from "./suffix";
