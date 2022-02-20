import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    static forbiddenValue(control: AbstractControl): ValidationErrors | null {
        if (control.value === "asd") {
            return { forbiddenValue: true };
        } else {
            return null;
        }

    }


    static getForbiddenValidator(values: string[]) {

        return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
            return new Promise(resolver => {
                setTimeout(() => {
                    if (values.indexOf(control.value) !== -1) {
                        console.log('1');
                        resolver({ forbiddenValueAsync: true });
                    } else {
                        console.log('2');
                        resolver({ forbiddenValueAsync: false });
                    }
                }, 200);
            });
        }
    }

}