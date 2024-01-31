import { Component } from "@angular/core";

@Component({
    templateUrl:"./order-confirmation-component.html",
    styleUrls:["./order-confirmation-component.scss"]
})

export class orderConfirmationComponent{
    constructor(){
        console.log("Object created : Order Confirmation Component")
    }
}