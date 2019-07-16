import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    newTaskName: string;
    @Input() _task?: { taskName?: string, taskId?: string, isDone?: boolean };
    @Output() _newTask = new EventEmitter<{ taskName?: string, taskId?: string, isDone?: boolean }>();
    changeTask: string;

    constructor() {
    }

    ngOnInit() {
    }

    onChange(taskId) {
        this.changeTask = taskId;
    }

    acceptChanges(taskId) {
        if (this.newTaskName && this.newTaskName !== '' && this.newTaskName.match(/^\s+$/) === null) {
            this._task = {taskName: this.newTaskName, taskId: taskId, isDone: this._task.isDone};
            this.changeTask = ''
        }
    }

}
