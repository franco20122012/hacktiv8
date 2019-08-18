const assert = require('assert')

const Dictionary = require('./dictionary_sort.js')
const dict = new Dictionary()

describe('Dictionary is an object', () => {
  it('should generate new object', () => {
    assert.equal(typeof dict, 'object')
  })
  it('have [] for word fault', () => {
    assert.deepEqual(dict._word_vault, [])
  })
  it('add new words into word fault', () => {
    dict.add_words('word')
    assert.deepEqual(dict._word_vault, ['word'])
  })
  it('sort by alphabet', () => {
    dict.add_words('alfa')
    dict.add_words('Beta')
    assert.deepEqual(dict.sort(), ['alfa', 'Beta', 'word'])
  })
})
