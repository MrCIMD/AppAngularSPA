import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    public viewTitle: boolean = true;
    public valueInput: string = '';
    public title: string;
    public list: string[] = ['Papa', 'Manzana', 'Pepino'];

    constructor() {
        this.title = 'Hola mundo!';
    }

    public view() {
        this.viewTitle = !this.viewTitle;
    }

    public addItem(value: string) {
        this.list.push(value);
    }

    public viewConsole(value: string) {
        this.valueInput = value;
        console.log(value);
    }
}