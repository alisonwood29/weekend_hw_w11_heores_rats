const assert = require('assert');
const Hero = require('../hero');
const Food = require('../food');


describe('Hero', function () {

  let hero;
  let food;

  beforeEach(function () {
    hero = new Hero('Alison', 'chocolate');
    food = new Food('chocolate', 20);
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

  it('should be able to eat food', function () {
    hero.eat(food);
    assert.strictEqual(hero.healthValue, 120);
  });

});
