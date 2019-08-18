const assert = require('assert')

const { linearSearch, globalLinearSearch } = require('./linear_search.js')

const random_numbers = [6, 29, 18, 2, 72, 19, 18, 10, 37]
describe('Test linearSearch', () => {
  describe('release 0: ', () => {
    it('search 18', () => {
      assert.equal(linearSearch(18, random_numbers), 2)
    })
    it('search 9', () => {
      assert.equal(linearSearch(9, random_numbers), -1)
    })
  })
  describe('release 1: ', () => {
    it('test banana', () => {
      const banana_arr = "banana".split()
      assert.deepEqual(globalLinearSearch("a", banana_arr), [1, 3, 5])
    })
  })
})

