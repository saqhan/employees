import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {ControlItem} from "@src/app/models/frontend";
import {NotificationService} from "@src/app/services";
import {markFormGroupTouched, regex, regexErrors} from "@src/app/shared";



@Component({
    selector: 'app-shared',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
    // @ts-ignore
  form: FormGroup;
    isInline: boolean;
    regexErrors = regexErrors;

    items: ControlItem[];

    showSpinner = false;

    constructor(private fb: FormBuilder, private notification: NotificationService) {
        this.isInline = true;

        this.items = [
            { label: 'First', value: 1 },
            { label: 'Second', value: 2 },
            { label: 'Third', value: 3 },
            { label: 'Fourth', value: 4 },
            { label: 'Fifth', value: 5 }
        ];
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            input: [null, {
                updateOn: 'blur',
                validators: [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.pattern(regex.numbers)
                ]
            }],
          password: [null, {
              updateOn: 'blur',
              validators: [
                Validators.required
              ]
          }]
        });
    }

    onSubmit(): void {
        console.log('Submit!');
    }

    onPatchValue(): void {
        this.form.patchValue({
            input: 123,
        });
    }

    onToggleInline(): void {
        this.isInline = !this.isInline;
    }

    onToggleDisable(): void {
        if (this.form.enabled) {
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

    onToggleSpinner(): void {
        this.showSpinner = !this.showSpinner;
    }

    onSuccess(): void {
        this.notification.success('Everything is fine!');
    }

    onError(): void {
        this.notification.error('Oops! Something is wrong');
    }

}
