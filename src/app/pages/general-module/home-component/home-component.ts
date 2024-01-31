import { Component } from "@angular/core";

@Component({
    templateUrl:"./home-component.html",
    styleUrls:["./home-component.scss"]
})

export class homeComponent{
    constructor(){
        console.log("Object created : Home Component")
    }
}