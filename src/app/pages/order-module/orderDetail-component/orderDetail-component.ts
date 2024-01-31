import { Component } from "@angular/core";

@Component({
    templateUrl:"./orderDetail-component.html",
    styleUrls:["./orderDetail-component.scss"]
})

export class orderDetailComponent{
    constructor(){
        console.log("Object created : Order Detail Component")
    }
}