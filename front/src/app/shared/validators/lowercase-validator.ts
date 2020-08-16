import { AbstractControl } from '@angular/forms';

const lowercaseValidator = (control:AbstractControl) =>{
    
    if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)){
        return{
            lowercase:true
        };
    }

    return null;
}

export {lowercaseValidator};