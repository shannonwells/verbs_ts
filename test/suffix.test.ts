import { describe, it, expect } from 'vitest';
import * as Suffix from '../src/suffix';

describe('Suffix', () => {
  describe('endsConsonantVowelConsonant', () => {
    it('returns false for "vote"', () => {
      expect(Suffix.endsConsonantVowelConsonant('vote')).toBe(false);
    });

    it('returns false for "stitch"', () => {
      expect(Suffix.endsConsonantVowelConsonant('stitch')).toBe(false);
    });

    it('returns false for "inn"', () => {
      expect(Suffix.endsConsonantVowelConsonant('inn')).toBe(false);
    });

    it('returns false for "carry"', () => {
      expect(Suffix.endsConsonantVowelConsonant('carry')).toBe(false);
    });

    it('returns true for "run"', () => {
      expect(Suffix.endsConsonantVowelConsonant('run')).toBe(true);
    });
  });

  describe('endsConsonantPlusY', () => {
    it('returns false for "vote"', () => {
      expect(Suffix.endsConsonantPlusY('vote')).toBe(false);
    });

    it('returns false for "stitch"', () => {
      expect(Suffix.endsConsonantPlusY('stitch')).toBe(false);
    });

    it('returns false for "inn"', () => {
      expect(Suffix.endsConsonantPlusY('inn')).toBe(false);
    });

    it('returns true for "carry"', () => {
      expect(Suffix.endsConsonantPlusY('carry')).toBe(true);
    });

    it('returns false for "run"', () => {
      expect(Suffix.endsConsonantPlusY('run')).toBe(false);
    });
  });

  describe('endsE', () => {
    it('returns true for "vote"', () => {
      expect(Suffix.endsE('vote')).toBe(true);
    });

    it('returns false for "stitch"', () => {
      expect(Suffix.endsE('stitch')).toBe(false);
    });

    it('returns false for "inn"', () => {
      expect(Suffix.endsE('inn')).toBe(false);
    });

    it('returns false for "carry"', () => {
      expect(Suffix.endsE('carry')).toBe(false);
    });

    it('returns false for "run"', () => {
      expect(Suffix.endsE('run')).toBe(false);
    });
  });

  describe('endsIe', () => {
    it('returns true for "lie"', () => {
      expect(Suffix.endsIe('lie')).toBe(true);
    });

    it('returns false for "hello"', () => {
      expect(Suffix.endsIe('hello')).toBe(false);
    });
  });

  describe('endsENotIe', () => {
    it('returns false for "lie"', () => {
      expect(Suffix.endsENotIe('lie')).toBe(false);
    });

    it('returns false for "hello"', () => {
      expect(Suffix.endsENotIe('hello')).toBe(false);
    });

    it('returns true for "vote"', () => {
      expect(Suffix.endsENotIe('vote')).toBe(true);
    });
  });

  describe('withEd', () => {
    it('conjugates "vote" to "voted"', () => {
      expect(Suffix.withEd('vote')).toBe('voted');
    });

    it('conjugates "guzzle" to "guzzled"', () => {
      expect(Suffix.withEd('guzzle')).toBe('guzzled');
    });

    it('conjugates "row" to "rowed"', () => {
      expect(Suffix.withEd('row')).toBe('rowed');
    });

    it('conjugates "fix" to "fixed"', () => {
      expect(Suffix.withEd('fix')).toBe('fixed');
    });

    it('conjugates "stitch" to "stitched"', () => {
      expect(Suffix.withEd('stitch')).toBe('stitched');
    });

    it('conjugates "pass" to "passed"', () => {
      expect(Suffix.withEd('pass')).toBe('passed');
    });

    it('conjugates "bill" to "billed"', () => {
      expect(Suffix.withEd('bill')).toBe('billed');
    });

    it('conjugates "carry" to "carried"', () => {
      expect(Suffix.withEd('carry')).toBe('carried');
    });

    it('conjugates "ban" to "banned"', () => {
      expect(Suffix.withEd('ban')).toBe('banned');
    });

    it('conjugates "chat" to "chatted"', () => {
      expect(Suffix.withEd('chat')).toBe('chatted');
    });

    it('conjugates "prefer" to "preferred"', () => {
      expect(Suffix.withEd('prefer')).toBe('preferred');
    });

    it('conjugates "pen" to "penned"', () => {
      expect(Suffix.withEd('pen')).toBe('penned');
    });

    it('conjugates "allow" to "allowed"', () => {
      expect(Suffix.withEd('allow')).toBe('allowed');
    });

    it('conjugates "half" to "halved"', () => {
      expect(Suffix.withEd('half')).toBe('halved');
    });

    it('conjugates "laugh" to "laughed"', () => {
      expect(Suffix.withEd('laugh')).toBe('laughed');
    });
  });

  describe('withIng', () => {
    it('conjugates "bite" to "biting"', () => {
      expect(Suffix.withIng('bite')).toBe('biting');
    });

    it('conjugates "prepare" to "preparing"', () => {
      expect(Suffix.withIng('prepare')).toBe('preparing');
    });

    it('conjugates "stitch" to "stitching"', () => {
      expect(Suffix.withIng('stitch')).toBe('stitching');
    });

    it('conjugates "inn" to "inning"', () => {
      expect(Suffix.withIng('inn')).toBe('inning');
    });

    it('conjugates "carry" to "carrying"', () => {
      expect(Suffix.withIng('carry')).toBe('carrying');
    });

    it('conjugates "lie" to "lying"', () => {
      expect(Suffix.withIng('lie')).toBe('lying');
    });

    it('conjugates "run" to "running"', () => {
      expect(Suffix.withIng('run')).toBe('running');
    });

    it('conjugates "roll" to "rolling"', () => {
      expect(Suffix.withIng('roll')).toBe('rolling');
    });

    it('conjugates "calf" to "calving"', () => {
      expect(Suffix.withIng('calf')).toBe('calving');
    });

    it('conjugates "laugh" to "laughing"', () => {
      expect(Suffix.withIng('laugh')).toBe('laughing');
    });

    it('conjugates "refer" to "referring"', () => {
      expect(Suffix.withIng('refer')).toBe('referring');
    });
  });

  describe('withS', () => {
    it('conjugates "bite" to "bites"', () => {
      expect(Suffix.withS('bite')).toBe('bites');
    });

    it('conjugates "prepare" to "prepares"', () => {
      expect(Suffix.withS('prepare')).toBe('prepares');
    });

    it('conjugates "stitch" to "stitches"', () => {
      expect(Suffix.withS('stitch')).toBe('stitches');
    });

    it('conjugates "inn" to "inns"', () => {
      expect(Suffix.withS('inn')).toBe('inns');
    });

    it('conjugates "carry" to "carries"', () => {
      expect(Suffix.withS('carry')).toBe('carries');
    });

    it('conjugates "lie" to "lies"', () => {
      expect(Suffix.withS('lie')).toBe('lies');
    });

    it('conjugates "run" to "runs"', () => {
      expect(Suffix.withS('run')).toBe('runs');
    });

    it('conjugates "calf" to "calves"', () => {
      expect(Suffix.withS('calf')).toBe('calves');
    });

    it('conjugates "laugh" to "laughs"', () => {
      expect(Suffix.withS('laugh')).toBe('laughs');
    });

    it('conjugates "refer" to "refers"', () => {
      expect(Suffix.withS('refer')).toBe('refers');
    });

    it('conjugates "die" to "dies"', () => {
      expect(Suffix.withS('die')).toBe('dies');
    });
  });
});
