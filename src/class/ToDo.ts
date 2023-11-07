export default class Task {
  task: string;
  status: string;

  constructor(task: string) {
    this.task = task;
    this.status = "active";
  }
}
