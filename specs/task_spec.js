const assert = require('assert');
const Task = require('../task');

describe('Task', function () {

  let task;

  beforeEach(function () {
    task = new Task('save the world');
  })

  it('should have a description', function () {
    assert.strictEqual(task.description, 'save the world')
  })

})
