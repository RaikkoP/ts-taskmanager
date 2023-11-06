export default class Task {
    task: string;
    status: string;

    constructor(task: string){
        this.task = task;
        this.status = 'active';
    }

    ifClicked(){
        if(this.status === 'active'){
            this.status = 'complete';
            return;
        } else if (this.status === 'complete'){
            this.status = 'active';
            return;
        }
    }
}