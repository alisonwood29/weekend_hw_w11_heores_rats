const Hero = function (name, favouriteFood) {
  this.name = name;
  this.healthValue = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.talk = function () {
  return `Hello, my name is ${this.name}`;
}

Hero.prototype.eat = function (food) {
  this.healthValue += food.replenishValue;
}


module.exports = Hero;
