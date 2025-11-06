const CONSONANT_PATTERN = "[bcdfghjklmnpqrstvz]";
const VOWEL_PATTERN = "[aeiouy]";

export function withEd(infinitive: string): string {
  if (endsE(infinitive)) {
    return infinitive + "d";
  } else if (endsConsonantPlusY(infinitive)) {
    return infinitive.slice(0, -1) + "ied";
  } else if (endsVowelLf(infinitive)) {
    return infinitive.slice(0, -2) + "lved";
  } else if (endsEr(infinitive)) {
    return infinitive + "ed";
  } else if (endsConsonantVowelConsonant(infinitive)) {
    return infinitive + infinitive.slice(-1) + "ed";
  } else {
    return infinitive + "ed";
  }
}

export function withIng(infinitive: string): string {
  if (endsIe(infinitive)) {
    return infinitive.slice(0, -2) + "ying";
  } else if (endsENotIe(infinitive)) {
    return infinitive.slice(0, -1) + "ing";
  } else if (endsVowelLf(infinitive)) {
    return infinitive.slice(0, -2) + "lving";
  } else if (endsConsonantVowelConsonant(infinitive)) {
    return infinitive + infinitive.slice(-1) + "ing";
  } else {
    return infinitive + "ing";
  }
}

export function withS(infinitive: string): string {
  if (/ch$/i.test(infinitive)) {
    return infinitive + "es";
  } else if (endsE(infinitive)) {
    return infinitive + "s";
  } else if (endsConsonantPlusY(infinitive)) {
    return infinitive.slice(0, -1) + "ies";
  } else if (endsVowelLf(infinitive)) {
    return infinitive.slice(0, -2) + "lves";
  } else if (endsAiou(infinitive)) {
    return infinitive + "es";
  } else {
    return infinitive + "s";
  }
}

export function endsAiou(infinitive: string): boolean {
  return /[aiou]$/i.test(infinitive);
}

export function endsConsonantVowelConsonant(infinitive: string): boolean {
  const pattern = CONSONANT_PATTERN + VOWEL_PATTERN + CONSONANT_PATTERN + "$";
  const regex = new RegExp(pattern, "i");
  return regex.test(infinitive);
}

export function endsEr(infinitive: string): boolean {
  return /[^f]er/.test(infinitive);
}

export function endsConsonantPlusY(infinitive: string): boolean {
  const regex = new RegExp(CONSONANT_PATTERN + "y$", "i");
  return regex.test(infinitive);
}

export function endsE(infinitive: string): boolean {
  return /e$/i.test(infinitive);
}

export function endsIe(infinitive: string): boolean {
  return /ie$/i.test(infinitive);
}

export function endsENotIe(infinitive: string): boolean {
  return /[^i]e$/i.test(infinitive);
}

export function endsVowelLf(infinitive: string): boolean {
  const regex = new RegExp(VOWEL_PATTERN + "lf$");
  return regex.test(infinitive);
}
