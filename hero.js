const Hero = function (name, favouriteFood) {
  this.name = name;
  this.healthValue = 100;
  this.favouriteFood = favouriteFood;
}

Hero.prototype.talk = function () {
  return `Hello, my name is ${this.name}`;
}


module.exports = Hero;
