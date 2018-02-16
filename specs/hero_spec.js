const assert = require('assert');
const Hero = require('../hero');
const Food = require('../food');


describe('Hero', function () {

  let hero;
  let food1;
  let food2;

  beforeEach(function () {
    hero = new Hero('Alison', 'chocolate');
    food1 = new Food('banana', 25);
    food2 = new Food('chocolate', 20);
  });

  it('should have a name', function () {
    assert.strictEqual(hero.name, 'Alison');
  });

  it('should have a health value', function () {
    assert.strictEqual(hero.healthValue, 100);
  });

  it('should have a favourite food', function () {
    assert.strictEqual(hero.favouriteFood, 'chocolate');
  });

  it('can talk', function () {
    const expected = 'Hello, my name is Alison'
    assert.strictEqual(hero.talk(), expected);
  });

  it('should have an empty list of tasks to begin', function () {
    assert.deepStrictEqual(hero.tasks, []);
  });

  it('should be able to eat food and replenish health value', function () {
    hero.eat(food1);
    assert.strictEqual(hero.healthValue, 125);
  });

  it('should be able replenish health vale by 1.5 for favourite food', function () {
    hero.eat(food2);
    assert.strictEqual(hero.healthValue, 130);
  })

});
