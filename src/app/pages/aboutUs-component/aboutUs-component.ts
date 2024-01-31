import { Component } from "@angular/core";

@Component({
    templateUrl:"./aboutUs-component.html",
    styleUrls:["./aboutUs-component.scss"]
})

export class aboutUsComponent{
    constructor(){
        console.log("Object created : About Us Component")
    }
}