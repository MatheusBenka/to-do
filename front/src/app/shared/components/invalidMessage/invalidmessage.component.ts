import { Component, Input } from "@angular/core";

@Component({
    selector:'td-invalid-message',
    templateUrl:'./invalidmessage.component.html'
})
export class InvalidMessageComponent{
    @Input() message:string ='';
}