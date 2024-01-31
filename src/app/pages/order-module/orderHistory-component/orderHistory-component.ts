import { Component } from "@angular/core";

@Component({
    templateUrl:"./orderHistory-component.html",
    styleUrls:["./orderHistory-component.scss"]
})

export class orderHistoryComponent{
    constructor(){
        console.log("Object created : Order History Component")
    }
}