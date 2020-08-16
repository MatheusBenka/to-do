import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { LoadingModule } from '../../loading/loading.module';

@NgModule({
    declarations:[HeaderComponent],
    exports:[HeaderComponent],
    imports:[
        CommonModule,
        RouterModule,
        LoadingModule
    ]
})
export class SiteModule{

}