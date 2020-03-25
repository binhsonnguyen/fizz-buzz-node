import fizzBuzz from '../src/fizzbuzz'

const assert = require('assert')
describe('FizzBuzz', function () {
  describe('answer', function () {
    it('should be exists', function () {
      assert(!!fizzBuzz)
      assert.equal(typeof fizzBuzz, typeof {})
    })

    it('should return Fizz when number is 3', function () {
      const number = 3
      const expected = 'Fizz'
      const actual = fizzBuzz.answer(number)
      assert.equal(actual, expected)
    })
  })
})
