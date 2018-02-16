const Task = function (description, difficulty, urgency, reward, complete) {
  this.description = description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = complete;
}


module.exports = Task;
