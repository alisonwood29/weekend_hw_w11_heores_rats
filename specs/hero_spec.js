const assert = require('assert');
const Hero = require('../hero');


describe('Hero', function () {

  let hero;

  beforeEach(function () {
    hero = new Hero('Alison');
  })

  it('should have a name', function () {
    assert.strictEqual(hero.name, 'Alison')
  })
})
