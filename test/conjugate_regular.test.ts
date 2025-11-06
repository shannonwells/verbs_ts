import { describe, it, expect } from 'vitest';
import * as ConjugateRegular from '../src/conjugate_regular';

describe('ConjugateRegular', () => {
  describe('carry, present', () => {
    const verb = 'carry';
    const tense = 'present';

    it('conjugates first person singular', () => {
      const options = { tense, person: 'first', plurality: 'singular' };
      expect('I ' + ConjugateRegular.conjugate(verb, options)).toBe('I carry');
    });

    it('conjugates second person singular', () => {
      const options = { tense, person: 'second', plurality: 'singular' };
      expect('You ' + ConjugateRegular.conjugate(verb, options)).toBe('You carry');
    });

    it('conjugates third person singular', () => {
      const options = { tense, person: 'third', plurality: 'singular' };
      expect('He ' + ConjugateRegular.conjugate(verb, options)).toBe('He carries');
    });

    it('conjugates first person plural', () => {
      const options = { tense, person: 'first', plurality: 'plural' };
      expect('We ' + ConjugateRegular.conjugate(verb, options)).toBe('We carry');
    });

    it('conjugates second person plural', () => {
      const options = { tense, person: 'second', plurality: 'plural' };
      expect('You ' + ConjugateRegular.conjugate(verb, options)).toBe('You carry');
    });

    it('conjugates third person plural', () => {
      const options = { tense, person: 'third', plurality: 'plural' };
      expect('They ' + ConjugateRegular.conjugate(verb, options)).toBe('They carry');
    });
  });

  describe('work, past', () => {
    const verb = 'work';
    const tense = 'past';

    it('conjugates first person singular', () => {
      const options = { tense, person: 'first', plurality: 'singular' };
      expect('I ' + ConjugateRegular.conjugate(verb, options)).toBe('I worked');
    });

    it('conjugates second person singular', () => {
      const options = { tense, person: 'second', plurality: 'singular' };
      expect('You ' + ConjugateRegular.conjugate(verb, options)).toBe('You worked');
    });

    it('conjugates third person singular', () => {
      const options = { tense, person: 'third', plurality: 'singular' };
      expect('He ' + ConjugateRegular.conjugate(verb, options)).toBe('He worked');
    });

    it('conjugates first person plural', () => {
      const options = { tense, person: 'first', plurality: 'plural' };
      expect('We ' + ConjugateRegular.conjugate(verb, options)).toBe('We worked');
    });

    it('conjugates second person plural', () => {
      const options = { tense, person: 'second', plurality: 'plural' };
      expect('You ' + ConjugateRegular.conjugate(verb, options)).toBe('You worked');
    });

    it('conjugates third person plural', () => {
      const options = { tense, person: 'third', plurality: 'plural' };
      expect('They ' + ConjugateRegular.conjugate(verb, options)).toBe('They worked');
    });
  });

  describe('work, future', () => {
    const verb = 'work';
    const tense = 'future';

    it('conjugates first person singular', () => {
      const options = { tense, person: 'first', plurality: 'singular' };
      expect('I ' + ConjugateRegular.conjugate(verb, options)).toBe('I will work');
    });

    it('conjugates second person singular', () => {
      const options = { tense, person: 'second', plurality: 'singular' };
      expect('You ' + ConjugateRegular.conjugate(verb, options)).toBe('You will work');
    });

    it('conjugates third person singular', () => {
      const options = { tense, person: 'third', plurality: 'singular' };
      expect('He ' + ConjugateRegular.conjugate(verb, options)).toBe('He will work');
    });

    it('conjugates first person plural', () => {
      const options = { tense, person: 'first', plurality: 'plural' };
      expect('We ' + ConjugateRegular.conjugate(verb, options)).toBe('We will work');
    });

    it('conjugates second person plural', () => {
      const options = { tense, person: 'second', plurality: 'plural' };
      expect('You ' + ConjugateRegular.conjugate(verb, options)).toBe('You will work');
    });

    it('conjugates third person plural', () => {
      const options = { tense, person: 'third', plurality: 'plural' };
      expect('They ' + ConjugateRegular.conjugate(verb, options)).toBe('They will work');
    });
  });

  describe('past_perfect', () => {
    const verb = 'work';
    const tense = 'past_perfect';

    it('conjugates first person singular', () => {
      const options = { tense, person: 'first', plurality: 'singular' };
      expect('I ' + ConjugateRegular.conjugate(verb, options)).toBe('I had worked');
    });

    it('conjugates second person singular', () => {
      const options = { tense, person: 'second', plurality: 'singular' };
      expect('You ' + ConjugateRegular.conjugate(verb, options)).toBe('You had worked');
    });

    it('conjugates third person singular', () => {
      const options = { tense, person: 'third', plurality: 'singular' };
      expect('He ' + ConjugateRegular.conjugate(verb, options)).toBe('He had worked');
    });

    it('conjugates first person plural', () => {
      const options = { tense, person: 'first', plurality: 'plural' };
      expect('We ' + ConjugateRegular.conjugate(verb, options)).toBe('We had worked');
    });

    it('conjugates second person plural', () => {
      const options = { tense, person: 'second', plurality: 'plural' };
      expect('You ' + ConjugateRegular.conjugate(verb, options)).toBe('You had worked');
    });

    it('conjugates third person plural', () => {
      const options = { tense, person: 'third', plurality: 'plural' };
      expect('They ' + ConjugateRegular.conjugate(verb, options)).toBe('They had worked');
    });
  });

  describe('live, present progressive', () => {
    const verb = 'live';
    const tense = 'present_progressive';

    it('conjugates first person singular', () => {
      const options = { tense, person: 'first', plurality: 'singular' };
      expect('I ' + ConjugateRegular.conjugate(verb, options)).toBe('I am living');
    });

    it('conjugates second person singular', () => {
      const options = { tense, person: 'second', plurality: 'singular' };
      expect('You ' + ConjugateRegular.conjugate(verb, options)).toBe('You are living');
    });

    it('conjugates third person singular', () => {
      const options = { tense, person: 'third', plurality: 'singular' };
      expect('She ' + ConjugateRegular.conjugate(verb, options)).toBe('She is living');
    });

    it('conjugates first person plural', () => {
      const options = { tense, person: 'first', plurality: 'plural' };
      expect('We ' + ConjugateRegular.conjugate(verb, options)).toBe('We are living');
    });

    it('conjugates second person plural', () => {
      const options = { tense, person: 'second', plurality: 'plural' };
      expect('You ' + ConjugateRegular.conjugate(verb, options)).toBe('You are living');
    });

    it('conjugates third person plural', () => {
      const options = { tense, person: 'third', plurality: 'plural' };
      expect('They ' + ConjugateRegular.conjugate(verb, options)).toBe('They are living');
    });
  });

  describe('die, past progressive', () => {
    const verb = 'die';
    const tense = 'past_progressive';

    it('conjugates first person singular', () => {
      const options = { tense, person: 'first', plurality: 'singular' };
      expect('I ' + ConjugateRegular.conjugate(verb, options)).toBe('I was dying');
    });

    it('conjugates second person singular', () => {
      const options = { tense, person: 'second', plurality: 'singular' };
      expect('You ' + ConjugateRegular.conjugate(verb, options)).toBe('You were dying');
    });

    it('conjugates third person singular', () => {
      const options = { tense, person: 'third', plurality: 'singular' };
      expect('He ' + ConjugateRegular.conjugate(verb, options)).toBe('He was dying');
    });

    it('conjugates first person plural', () => {
      const options = { tense, person: 'first', plurality: 'plural' };
      expect('We ' + ConjugateRegular.conjugate(verb, options)).toBe('We were dying');
    });

    it('conjugates second person plural', () => {
      const options = { tense, person: 'second', plurality: 'plural' };
      expect('You ' + ConjugateRegular.conjugate(verb, options)).toBe('You were dying');
    });

    it('conjugates third person plural', () => {
      const options = { tense, person: 'third', plurality: 'plural' };
      expect('They ' + ConjugateRegular.conjugate(verb, options)).toBe('They were dying');
    });
  });

  describe('-er and odd, not irregular verb forms', () => {
    const testCases = [
      { tense: 'past', verb: 'clobber', expected: 'clobbered' },
      { tense: 'past', verb: 'shatter', expected: 'shattered' },
      { tense: 'past', verb: 'hack', expected: 'hacked' },
      { tense: 'past', verb: 'miter', expected: 'mitered' },
      { tense: 'past', verb: 'corner', expected: 'cornered' },
      { tense: 'past', verb: 'belittle', expected: 'belittled' },
      { tense: 'past', verb: 'rescue', expected: 'rescued' },
    ];

    testCases.forEach((tc) => {
      it(`conjugates "${tc.verb}" to "${tc.expected}"`, () => {
        const options = { tense: tc.tense, person: 'first', plurality: 'singular' };
        expect(ConjugateRegular.conjugate(tc.verb, options)).toBe(tc.expected);
      });
    });
  });
});
