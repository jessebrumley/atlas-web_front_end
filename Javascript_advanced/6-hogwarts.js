class studentHogwarts {
  #privateScore = 0;
  #name = null;

  changeScoreBy(points) {
    this.#privateScore += points;
  }
  
  setName(newName) {
    this.#name = newName;
  }

  rewardStudent() {
    this.changeScoreBy(1);
  }

  penalizeStudent() {
    this.changeScoreBy(-1);
  }

  getScore() {
    return `${this.#name}: ${this.#privateScore}`;
  }
}

const harry = new studentHogwarts();
harry.setName('Harry');
for (let i = 0; i < 4; i++) {
  harry.rewardStudent();
}
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
