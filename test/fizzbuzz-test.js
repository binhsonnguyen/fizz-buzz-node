import fizzBuzz from '../src/fizzbuzz'

const assert = require('assert')
describe('FizzBuzz', function () {
  describe('answer', function () {
    it('should be exists', function () {
      assert(!!fizzBuzz)
      assert.equal(typeof fizzBuzz, typeof {})
    })
  })
})
