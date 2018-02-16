const assert = require('assert');
const Food = require('../food');

describe('Food', function () {


  let food;

  beforeEach(function () {
    food = new Food('chocolate', 20);
  });

  it('should have name', function () {
    assert.strictEqual(food.name, 'chocolate');
  });

  it('should have a replenish value', function () {
    assert.strictEqual(food.replenishValue, 20);
  });


});
