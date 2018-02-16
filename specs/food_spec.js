const assert = require('assert');
const Food = require('../food');

describe('Food', function () {


  let food;

  beforeEach(function () {
    food = new Food('chocolate');
  });

  it('should have name', function () {
    assert.strictEqual(food.name, 'chocolate');
  });


})
