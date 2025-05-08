import { Text } from '../../../src/core/entities/Text'

const sampleText = `The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.`

describe('Text Entity', () => {
  let text: Text

  beforeEach(() => {
    text = new Text(sampleText)
  })

  test('should return correct word count', () => {
    expect(text.getWordCount()).toBe(16)
  })

  test('should return correct character count', () => {
    expect(text.getCharacterCount()).toBe(60)
  })

  test('should return correct sentence count', () => {
    expect(text.getSentenceCount()).toBe(2)
  })

  test('should return correct paragraph count', () => {
    expect(text.getParagraphCount()).toBe(1)
  })

  test('should return the longest word(s)', () => {
    expect(text.getLongestWords()).toEqual(expect.arrayContaining(['jumps']))
  })
})
