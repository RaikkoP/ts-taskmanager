//Usually its good to avoid making classes in React, but for this project I felt as if it would 
//make my code feel cleaner.
export default class Task {
  task: string;
  status: string;

  constructor(task: string) {
    this.task = task;
    this.status = "active";
  }
}
