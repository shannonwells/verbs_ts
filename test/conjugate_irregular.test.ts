import { describe, it, expect } from 'vitest';
import * as ConjugateIrregular from '../src/conjugate_irregular';

describe('ConjugateIrregular', () => {
  describe('isIrregular', () => {
    it('returns true for "awake"', () => {
      expect(ConjugateIrregular.isIrregular('awake')).toBe(true);
    });

    it('returns false for "play"', () => {
      expect(ConjugateIrregular.isIrregular('play')).toBe(false);
    });

    it('returns true for "flee"', () => {
      expect(ConjugateIrregular.isIrregular('flee')).toBe(true);
    });
  });

  describe('present', () => {
    it('conjugates "Awake" in first person singular', () => {
      const options = { tense: 'present', person: 'irst', plurality: 'singular' };
      expect('I ' + ConjugateIrregular.conjugate('Awake', options)).toBe('I Awake');
    });

    it('conjugates "run" in first person singular', () => {
      const options = { tense: 'present', person: 'first', plurality: 'singular' };
      expect('They ' + ConjugateIrregular.conjugate('run', options)).toBe('They run');
    });
  });

  describe('past', () => {
    it('conjugates "awake" to "awoke"', () => {
      const options = { tense: 'past', person: 'first', plurality: 'singular' };
      expect('I ' + ConjugateIrregular.conjugate('awake', options)).toBe('I awoke');
    });

    it('conjugates "flee" to "fled"', () => {
      const options = { tense: 'past', person: 'first', plurality: 'singular' };
      expect('I ' + ConjugateIrregular.conjugate('flee', options)).toBe('I fled');
    });

    it('conjugates "run" to "ran"', () => {
      const options = { tense: 'past', person: 'first', plurality: 'singular' };
      expect('They ' + ConjugateIrregular.conjugate('run', options)).toBe('They ran');
    });

    it('conjugates "leave" to "left"', () => {
      const options = { tense: 'past', person: 'third', plurality: 'singular' };
      expect('She ' + ConjugateIrregular.conjugate('leave', options)).toBe('She left');
    });
  });

  describe('past_perfect', () => {
    it('conjugates "awake" to "have awoken"', () => {
      const options = { tense: 'past_perfect', person: 'first', plurality: 'singular' };
      expect('I ' + ConjugateIrregular.conjugate('awake', options)).toBe('I have awoken');
    });

    it('conjugates "run" in third person plural', () => {
      const options = { tense: 'past_perfect', person: 'third', plurality: 'plural' };
      expect('They ' + ConjugateIrregular.conjugate('run', options)).toBe('They have run');
    });

    it('conjugates "leave" in third person singular', () => {
      const options = { tense: 'past_perfect', person: 'third', plurality: 'singular' };
      expect('Elvis ' + ConjugateIrregular.conjugate('leave', options)).toBe('Elvis has left');
    });
  });

  describe('past_progressive', () => {
    it('conjugates "run" in second person plural', () => {
      const options = { tense: 'past_progressive', person: 'second', plurality: 'plural' };
      expect('They ' + ConjugateIrregular.conjugate('run', options)).toBe('They were running');
    });
  });

  describe('present_progressive', () => {
    it('conjugates "leave" in first person singular', () => {
      const options = { tense: 'present_progressive', person: 'first', plurality: 'singular' };
      expect('I ' + ConjugateIrregular.conjugate('leave', options)).toBe('I am leaving');
    });

    it('conjugates "leave" in third person plural', () => {
      const options = { tense: 'present_progressive', person: 'third', plurality: 'plural' };
      expect('They ' + ConjugateIrregular.conjugate('leave', options)).toBe('They are leaving');
    });
  });
});
