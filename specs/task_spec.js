const assert = require('assert');
const Task = require('../task');

describe('Task', function () {

  let task;

  beforeEach(function () {
    task = new Task('save the world', 10, 10);
  })

  it('should have a description', function () {
    assert.strictEqual(task.description, 'save the world');
  })

  it('should have a difficulty level', function () {
    assert.strictEqual(task.difficulty, 10);
  })

  it('should have an urgency level', function () {
    assert.strictEqual(task.urgency, 10);
  })

})
