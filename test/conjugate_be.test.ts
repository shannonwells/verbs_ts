import { describe, it, expect } from 'vitest';
import * as ConjugateBe from '../src/conjugate_be';

describe('ConjugateBe', () => {
  describe('conjugate present', () => {
    it('conjugates second person singular to "are"', () => {
      const options = { tense: 'present', person: 'second', plurality: 'singular' };
      expect('you ' + ConjugateBe.conjugate(options)).toBe('you are');
    });

    it('conjugates second person plural to "are"', () => {
      const options = { tense: 'present', person: 'second', plurality: 'plural' };
      expect('you ' + ConjugateBe.conjugate(options)).toBe('you are');
    });

    it('conjugates third person singular to "is"', () => {
      const options = { tense: 'present', person: 'third', plurality: 'singular' };
      expect('she ' + ConjugateBe.conjugate(options)).toBe('she is');
    });

    it('conjugates first person plural to "are"', () => {
      const options = { tense: 'present', person: 'first', plurality: 'plural' };
      expect('we ' + ConjugateBe.conjugate(options)).toBe('we are');
    });

    it('conjugates third person plural to "are"', () => {
      const options = { tense: 'present', person: 'third', plurality: 'plural' };
      expect('they ' + ConjugateBe.conjugate(options)).toBe('they are');
    });
  });

  describe('conjugate past', () => {
    it('conjugates first person singular to "was"', () => {
      const options = { tense: 'past', person: 'first', plurality: 'singular' };
      expect('I ' + ConjugateBe.conjugate(options)).toBe('I was');
    });

    it('conjugates third person singular to "was"', () => {
      const options = { tense: 'past', person: 'third', plurality: 'singular' };
      expect('he ' + ConjugateBe.conjugate(options)).toBe('he was');
    });

    it('conjugates third person plural to "were"', () => {
      const options = { tense: 'past', person: 'third', plurality: 'plural' };
      expect('they ' + ConjugateBe.conjugate(options)).toBe('they were');
    });

    it('conjugates past_perfect third person plural to "had been"', () => {
      const options = { tense: 'past_perfect', person: 'third', plurality: 'plural' };
      expect('they ' + ConjugateBe.conjugate(options)).toBe('they had been');
    });

    it('conjugates past_progressive third person singular to "was being"', () => {
      const options = { tense: 'past_progressive', person: 'third', plurality: 'singular' };
      expect('he ' + ConjugateBe.conjugate(options)).toBe('he was being');
    });
  });

  describe('future', () => {
    it('conjugates to "will be"', () => {
      const options = { tense: 'future', person: 'will be', plurality: 'singular' };
      expect('I ' + ConjugateBe.conjugate(options)).toBe('I will be');
    });
  });
});
