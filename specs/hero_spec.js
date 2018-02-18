const assert = require('assert');
const Hero = require('../hero');
const Food = require('../food');
const Task = require('../task');


describe('Hero', function () {

  let hero;
  let food1;
  let food2;
  let task1;
  let task2;
  let task3;

  beforeEach(function () {
    hero = new Hero('Alison', 'chocolate');
    food1 = new Food('banana', 25);
    food2 = new Food('chocolate', 20);
    task1 = new Task('save the world', 10, 10, '$1000', false);
    task2 = new Task('do the dishes', 2, 1, '$1', true);
    task3 = new Task('get cat out of tree', 6, 9, '$20', false);
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
  });

  it('should be able to add a task', function () {
    hero.addTask(task1);
    expected = [task1];
    assert.deepStrictEqual(hero.tasks, expected);
  });

  it('should be able to sort tasks by difficulty', function () {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    expected = [task1, task3, task2];
    assert.deepStrictEqual(hero.sortTaskByDifficulty(), expected);
  });

  it('should be able to find most difficult task', function () {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    expected = [task1];
    assert.deepEqual(hero.mostDifficultTask(), expected);
  });

  it('should be able to find complete tasks', function () {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    expected = [task2];
    assert.deepStrictEqual(hero.completeTasks(), expected);
  });

  it('should be able to find incomplete tasks', function () {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    expected = [task1, task3];
    assert.deepStrictEqual(hero.incompleteTasks(), expected);
  });

});
