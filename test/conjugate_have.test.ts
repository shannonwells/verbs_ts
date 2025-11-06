import { describe, it, expect } from 'vitest';
import * as ConjugateHave from '../src/conjugate_have';

describe('ConjugateHave', () => {
  describe('conjugate', () => {
    it('conjugates present first person singular to "have"', () => {
      const options = { tense: 'present', person: 'first', plurality: 'singular' };
      expect('I ' + ConjugateHave.conjugate(options)).toBe('I have');
    });

    it('conjugates present third person singular to "has"', () => {
      const options = { tense: 'present', person: 'third', plurality: 'singular' };
      expect('she ' + ConjugateHave.conjugate(options)).toBe('she has');
    });

    it('conjugates present second person singular to "have"', () => {
      const options = { tense: 'present', person: 'second', plurality: 'singular' };
      expect('you ' + ConjugateHave.conjugate(options)).toBe('you have');
    });

    it('conjugates present second person plural to "have"', () => {
      const options = { tense: 'present', person: 'second', plurality: 'plural' };
      expect('you ' + ConjugateHave.conjugate(options)).toBe('you have');
    });

    it('conjugates past first person plural to "had"', () => {
      const options = { tense: 'past', person: 'first', plurality: 'plural' };
      expect('I ' + ConjugateHave.conjugate(options)).toBe('I had');
    });
  });
});
