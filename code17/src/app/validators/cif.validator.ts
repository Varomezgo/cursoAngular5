import { FormControl } from '@angular/forms'

export class cifValidator {
    static checkCIF (formControl: FormControl){
        const prChar = formControl.value.charAt(0);
        if(!isNaN(prChar)){
            return {'checkCIF': true};
        } else {
            return null; //importante devolver null
        }
    }
}