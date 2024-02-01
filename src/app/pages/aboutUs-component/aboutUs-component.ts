import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    imports:[FormsModule],
    standalone:true,
    templateUrl:"./aboutUs-component.html",
    styleUrls:["./aboutUs-component.scss"]
})

export class aboutUsComponent{

    firstName:String='Mrityunjay';
    public lastName:String='Parmar';

    public email:String='admin@test.com';
    public password:String='admin@123';


    constructor(){
        console.log("Object created : About Us Component")
    }
}