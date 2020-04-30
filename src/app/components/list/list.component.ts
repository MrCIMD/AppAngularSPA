import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})
export class ListComponent {
    public name: string = 'holA mUnDo';
    public price: number = 17.89;
    public user: any = {
        name: 'Caleb Isaac',
        email: 'calexico659@gmail.com',
        phone: '9842385398'
    }
    public date: any = new Date();
    constructor() { }
}
