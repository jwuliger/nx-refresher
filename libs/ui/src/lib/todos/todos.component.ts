/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@myorg/data';

@Component({
    selector: 'myorg-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
    @Input() todos: Todo[] = [];

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit() {}
}
