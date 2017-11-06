var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('add test', function(){
    calculator.previousTotal = 1;
    calculator.add(4)
    assert.strictEqual(5, calculator.runningTotal)
  })

  it('subtract test', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.strictEqual(3, calculator.runningTotal)
  })

  it('multiply test', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5)
    assert.strictEqual(15 , calculator.runningTotal)
  })

  it('divide test', function(){
    calculator.previousTotal = 21;
    calculator.divide(7)
    assert.strictEqual(3, calculator.runningTotal)
  })

  it('number click test', function() {
    calculator.newTotal = true
    calculator.numberClick(4)
    assert.strictEqual(4 , calculator.runningTotal)
    assert.strictEqual(false , calculator.newTotal)
  })

  it('number click test2', function() {
    calculator.add(4)
    calculator.numberClick(4)
    assert.strictEqual(4 , calculator.runningTotal)
  })

  it('operator click test', function(){
    calculator.operatorClick('-')
    assert.strictEqual('-', calculator.previousOperator)
  })

  it('operator click equal test', function(){
    calculator.operatorClick('=')
    assert.strictEqual(null, calculator.previousOperator)
  })

  it('clear click previous operator test', function() {
    calculator.previousOperator = '+'
    calculator.clearClick()
    assert.strictEqual(null, calculator.previousOperator)
  })

  it('clear click previous total test', function() {
    calculator.previousTotal = 5
    calculator.clearClick()
    assert.strictEqual(null, calculator.previousTotal)
  })

});
