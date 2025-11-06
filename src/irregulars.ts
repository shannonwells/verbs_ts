/**
 * Irregular English verb forms
 * This module contains a database of irregular English verbs for linguistic processing.
 * Each verb maps to an array containing [past_simple, past_participle, (optional_alternative)]
 */

export type VerbForms = [string, string] | [string, string, string];

export const VERB_FORMS: Record<string, VerbForms> = {
  awake: ["awoke", "awoken", "awaken"],
  bear: ["bore", "born"],
  beat: ["beat", "beat"],
  become: ["became", "become"],
  begin: ["began", "begun"],
  bend: ["bent", "bent"],
  beset: ["beset", "beset"],
  bet: ["bet", "bet"],
  bid: ["bid", "bid"],
  bind: ["bound", "bound"],
  bite: ["bit", "bitten"],
  bleed: ["bled", "bled"],
  blow: ["blew", "blown"],
  break: ["broke", "broken"],
  breed: ["bred", "bred"],
  bring: ["brought", "brought"],
  broadcast: ["broadcast", "broadcast"],
  build: ["built", "built"],
  burn: ["burned", "burnt"],
  burst: ["burst", "burst"],
  buy: ["bought", "bought"],
  cast: ["cast", "cast"],
  catch: ["caught", "caught"],
  choose: ["chose", "chosen"],
  cling: ["clung", "clung"],
  come: ["came", "come"],
  cost: ["cost", "cost"],
  creep: ["crept", "crept"],
  cut: ["cut", "cut"],
  deal: ["dealt", "dealt"],
  dig: ["dug", "dug"],
  dive: ["dove", "dived"],
  do: ["did", "done"],
  draw: ["drew", "drawn"],
  dream: ["dreamed", "dreamed"],
  drive: ["drove", "driven"],
  drink: ["drank", "drunk"],
  eat: ["ate", "eaten"],
  fall: ["fell", "fallen"],
  feed: ["fed", "fed"],
  feel: ["felt", "felt"],
  fight: ["fought", "fought"],
  find: ["found", "found"],
  fit: ["fit", "fit"],
  flee: ["fled", "fled"],
  fling: ["flung", "flung"],
  fly: ["flew", "flown"],
  forbid: ["forbade", "forbidden"],
  forget: ["forgot", "forgotten"],
  forego: ["forewent", "foregone"],
  forgo: ["forwent", "forgone"],
  forgive: ["forgave", "forgiven"],
  forsake: ["forsook", "forsaken"],
  freeze: ["froze", "frozen"],
  get: ["got", "gotten"],
  give: ["gave", "given"],
  go: ["went", "gone"],
  grind: ["ground", "ground"],
  grow: ["grew", "grown"],
  hang: ["hung", "hung"],
  hear: ["heard", "heard"],
  hide: ["hid", "hidden"],
  hit: ["hit", "hit"],
  hold: ["held", "held"],
  hurt: ["hurt", "hurt"],
  keep: ["kept", "kept"],
  kneel: ["knelt", "knelt"],
  knit: ["knit", "knit"],
  know: ["knew", "known"],
  lay: ["laid", "laid"],
  lead: ["led", "led"],
  leap: ["leaped", "leaped"],
  learn: ["learned", "learned"],
  leave: ["left", "left"],
  lend: ["lent", "lent"],
  let: ["let", "let"],
  lie: ["lay", "lain"],
  light: ["lit", "lighted"],
  lose: ["lost", "lost"],
  make: ["made", "made"],
  mean: ["meant", "meant"],
  meet: ["met", "met"],
  misspell: ["misspelled", "misspelled"],
  mistake: ["mistook", "mistaken"],
  mow: ["mowed", "mown"],
  overcome: ["overcame", "overcome"],
  overdo: ["overdid", "overdone"],
  overtake: ["overtook", "overtaken"],
  overthrow: ["overthrew", "overthrown"],
  pay: ["paid", "paid"],
  plead: ["pled", "pled"],
  prove: ["proved", "proved"],
  put: ["put", "put"],
  quit: ["quit", "quit"],
  read: ["read", "read"],
  reset: ["reset", "reset"],
  rid: ["rid", "rid"],
  ride: ["rode", "ridden"],
  ring: ["rang", "rung"],
  rise: ["rose", "risen"],
  run: ["ran", "run"],
  saw: ["sawed", "sawn"],
  say: ["said", "said"],
  see: ["saw", "seen"],
  seek: ["sought", "sought"],
  sell: ["sold", "sold"],
  send: ["sent", "sent"],
  set: ["set", "set"],
  sew: ["sewed", "sewed"],
  shake: ["shook", "shaken"],
  shave: ["shaved", "shaved"],
  shear: ["shore", "shorn"],
  shed: ["shed", "shed"],
  shine: ["shone", "shone"],
  shoe: ["shoed", "shoed"],
  shoot: ["shot", "shot"],
  show: ["showed", "showed"],
  shrink: ["shrank", "shrunk"],
  shut: ["shut", "shut"],
  sing: ["sang", "sung"],
  sink: ["sank", "sunk"],
  sit: ["sat", "sat"],
  sleep: ["slept", "slept"],
  slay: ["slew", "slain"],
  slide: ["slid", "slid"],
  sling: ["slung", "slung"],
  slit: ["slit", "slit"],
  smite: ["smote", "smitten"],
  sow: ["sowed", "sowed"],
  speak: ["spoke", "spoken"],
  speed: ["sped", "sped"],
  spend: ["spent", "spent"],
  spill: ["spilled", "spilled"],
  spin: ["spun", "spun"],
  spit: ["spat", "spit"],
  split: ["split", "split"],
  spread: ["spread", "spread"],
  spring: ["sprang", "sprung"],
  stand: ["stood", "stood"],
  steal: ["stole", "stolen"],
  stick: ["stuck", "stuck"],
  sting: ["stung", "stung"],
  stink: ["stank", "stunk"],
  stride: ["strode", "stridden"],
  strike: ["struck", "stricken"],
  string: ["strung", "strung"],
  strive: ["strove", "striven"],
  swear: ["swore", "sworn"],
  sweep: ["swept", "swept"],
  swell: ["swelled", "swelled"],
  swim: ["swam", "swum"],
  swing: ["swung", "swung"],
  take: ["took", "taken"],
  teach: ["taught", "taught"],
  tear: ["tore", "torn"],
  tell: ["told", "told"],
  think: ["thought", "thought"],
  thrive: ["thrived", "thrived"],
  throw: ["threw", "thrown"],
  thrust: ["thrust", "thrust"],
  tread: ["trod", "trodden"],
  understand: ["understood", "understood"],
  uphold: ["upheld", "upheld"],
  upset: ["upset", "upset"],
  wake: ["woke", "woken"],
  wear: ["wore", "worn"],
  weave: ["wove", "woven"],
  wed: ["wed", "wed"],
  weep: ["wept", "wept"],
  wind: ["wound", "wound"],
  win: ["won", "won"],
  withhold: ["withheld", "withheld"],
  withstand: ["withstood", "withstood"],
  wring: ["wrung", "wrung"],
  write: ["wrote", "written"],
} as const;

/**
 * Get the verb forms for a given infinitive
 * @param infinitive - The base form of the verb
 * @returns The verb forms array or undefined if not found
 */
export function getVerbForms(infinitive: string): VerbForms | undefined {
  return VERB_FORMS[infinitive.toLowerCase()];
}

/**
 * Check if a verb is irregular
 * @param infinitive - The base form of the verb
 * @returns true if the verb is in the irregular verbs list
 */
export function isIrregular(infinitive: string): boolean {
  return infinitive.toLowerCase() in VERB_FORMS;
}

/**
 * Get the past simple form of a verb
 * @param infinitive - The base form of the verb
 * @returns The past simple form or undefined if not found
 */
export function getPastSimple(infinitive: string): string | undefined {
  const forms = getVerbForms(infinitive);
  return forms?.[0];
}

/**
 * Get the past participle form of a verb
 * @param infinitive - The base form of the verb
 * @returns The past participle form or undefined if not found
 */
export function getPastParticiple(infinitive: string): string | undefined {
  const forms = getVerbForms(infinitive);
  return forms?.[1];
}

// Note: The commented-out single_terminal_consonant code from the original
// Elixir file has been omitted. If you need that functionality, it should
// be implemented in a separate module for handling regular verb conjugation.