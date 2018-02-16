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
  if(food.name === this.favouriteFood){
    this.healthValue += food.replenishValue * 1.5;
  } else {
  this.healthValue += food.replenishValue;
  }
}


module.exports = Hero;
