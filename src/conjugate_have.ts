export interface ConjugationOptions {
  tense?: string;
  person?: string;
  plurality?: string;
}

export function conjugate(options: ConjugationOptions): string {
  switch (options.tense) {
    case "present":
      return present(options);
    case "past":
      return past(options);
    case "future":
      return future(options);
    default:
      return "have";
  }
}

function present(options: ConjugationOptions): string {
  if (options.person === "third") {
    return presentThird(options.plurality);
  }
  return "have";
}

function past(_options: ConjugationOptions): string {
  return "had";
}

function future(options: ConjugationOptions): string {
  if (options.person === "first") {
    return "shall have";
  }
  return "will have";
}

function presentThird(plurality?: string): string {
  if (plurality === "singular") {
    return "has";
  }
  return "have";
}
