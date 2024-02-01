import { NgModule } from "@angular/core";
import { aboutUsComponent } from "../aboutUs-component/aboutUs-component";
import { homeComponent } from "./home-component/home-component";
import { itemSearchComponent } from "./itemSearch-component/itemSearch-component";
import { GeneralRoutes } from "./gerneral.routes";


@NgModule({
    declarations: [
        homeComponent,
        itemSearchComponent
    ],
    imports: [GeneralRoutes]
})
export class GeneralModule{

}

export class GeneralModuleOne{

}

export class GeneralModuleTwo{

}