import { Component } from "@angular/core";
import { DemoService } from "./demo.service";

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
    demoarray;

    constructor(arrayservice: DemoService){
        //let arrayservice = new DemoService();
        this.demoarray= arrayservice.getArrayElements();
    }
}