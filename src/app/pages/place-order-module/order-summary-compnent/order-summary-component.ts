import { Component } from "@angular/core";

@Component({
    templateUrl:"./order-summary-component.html",
    styleUrls:["./order-summary-component.scss"]
})

export class orderSummaryComponent{
    constructor(){
        console.log("Object created : Order Summary Component")
    }
}