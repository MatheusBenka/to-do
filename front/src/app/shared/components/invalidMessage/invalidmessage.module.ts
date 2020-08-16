import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InvalidMessageComponent} from './invalidmessage.component';


@NgModule({
    declarations:[InvalidMessageComponent],
    imports:[CommonModule],
    exports:[InvalidMessageComponent]
})
export class InvalidMessageModule{}
