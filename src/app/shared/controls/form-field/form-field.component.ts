import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
    @Input() label: string = '';
    @Input() required: boolean = false;
    @Input() isInline: boolean = false;
    // @ts-ignore
  @Input() control: AbstractControl;
    @Input() patternError: string = '';

    constructor() {
        this.isInline = true;
    }

    ngOnInit(): void {
    }

    hasError(): boolean {
        return this.control && this.control.invalid && this.control.touched;
    }

    get errorKey() {
        return this.control && this.control.errors && Object.keys(this.control.errors)[0];
    }

}
