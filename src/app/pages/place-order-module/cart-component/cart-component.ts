import { Component } from "@angular/core";

@Component({
    templateUrl:"./cart-component.html",
    styleUrls:["./cart-component.scss"]
})

export class cartComponent{
    constructor(){
        console.log("Object created : Cart Component")
    }
}