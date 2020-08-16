import { ValidatorFn, FormGroup } from '@angular/forms';

const PasswordValidator:ValidatorFn = (formGroup:FormGroup) =>{
    const password = formGroup.get('password').value;
    const confirm = formGroup.get('confirmPassword').value;
    
    var response = null;
    if(password.trim() + confirm.trim()){
        response =  password == confirm ? null : {PasswordValidator:true};
    }
    return response;
}

export {PasswordValidator}