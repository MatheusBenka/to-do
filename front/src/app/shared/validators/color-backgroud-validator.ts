import { AbstractControl } from '@angular/forms';

const colorBackgroudValidator = (control:AbstractControl)=>{
    if(control?.value?.trim() && /^0*$/.test(control.value.split('#')[1])){
        return {
            colorBackgroud:true
        }        
    }
    return null;
}   

export {colorBackgroudValidator}