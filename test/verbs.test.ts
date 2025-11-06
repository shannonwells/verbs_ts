import { describe, it, expect } from 'vitest';
import { conjugate } from '../src/verbs';

describe('Verbs', () => {
  describe('basic present', () => {
    it('conjugates "play" in third person singular to "plays"', () => {
      expect(conjugate('play', { tense: 'present', person: 'third', plurality: 'singular' }))
        .toBe('plays');
    });
  });

  describe('to be', () => {
    it('conjugates "be" in first person singular to "am"', () => {
      const options = { tense: 'present', person: 'first', plurality: 'singular' };
      expect('I ' + conjugate('be', options)).toBe('I am');
    });
  });

  describe('basic past', () => {
    it('conjugates "work" to "worked"', () => {
      const options = { tense: 'past', person: 'first', plurality: 'singular' };
      expect('I ' + conjugate('work', options)).toBe('I worked');
    });
  });

  describe('preserves case', () => {
    it('preserves capitalization for "Flee"', () => {
      const options = { tense: 'past', person: 'first', plurality: 'singular' };
      expect('I ' + conjugate('Flee', options)).toBe('I Fled');
    });

    it('preserves all caps for "WALK"', () => {
      const options = { tense: 'past', person: 'first', plurality: 'singular' };
      expect('I ' + conjugate('WALK', options)).toBe('I WALKED');
    });
  });

  describe('irregulars', () => {
    it('conjugates "drink" in third person singular to "drinks"', () => {
      const options = { tense: 'present', person: 'third', plurality: 'singular' };
      expect('she ' + conjugate('drink', options)).toBe('she drinks');
    });
  });
});
