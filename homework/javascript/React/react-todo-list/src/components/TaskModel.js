import { v4 as uuid } from 'uuid';

 class TaskModel {
    constructor(title, detail, deadLine, isDone=false){
        this.uuid = uuid();
        this.title = title;
        this.detail = detail;
        this.deadLine = deadLine;
        this.isDone = isDone;
    }
}

export default TaskModel;