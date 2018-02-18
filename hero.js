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

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
}

// Hero.prototype.sortTaskByDifficulty = function () {
//   sortedTasks = this.tasks.sort(function (min, max){
//     return min.difficulty - max.difficulty
//   });
//   return sortedTasks;
// }
//
// Hero.prototype.mostDifficultTask = function () {
//   const highestDifficulty = this.tasks.reduce(function(acc, task) {
//     return Math.max(acc, task.difficulty);
//   }, 0);
//   const mostDifficultTask = this.tasks.filter(function(task) {
//     return task.difficulty === highestDifficulty;
//   });
//   return mostDifficultTask[0];
// }

Hero.prototype.completeTasks = function () {
  return this.tasks.filter(function (task) {
    return task.complete === true;
  });
}




module.exports = Hero;
