import { Component } from "@angular/core";

@Component({
    selector: 'demo',
    template: `
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="let demoitem of demoarray">{{demoitem}}</li>
    </ul>
    `
})

export class DemoComponent {
    title = "Application";
    demoarray = ["array1","array2","array3"];
}