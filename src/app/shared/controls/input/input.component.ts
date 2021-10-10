import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor  } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})

export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string | undefined;
  @Output() changed = new EventEmitter<string>();

  value: string | undefined;
  isDisabled: boolean | undefined;

  constructor() { }

    propagateChange: any = () => {};
    propagateTouched: any = () => {};

    writeValue(obj: any): void {
        this.value = obj;
    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any): void {
      this.propagateTouched = fn;
    }

    setDisabledState(isDisabled: boolean) {
      this.isDisabled = isDisabled;
    }

    onKeyUp(value: any):void {
      const val = value.target.value;
      this.value = val;
      this.writeValue(val);
      this.changed.emit(val);
    }

    onBlur():void {
      this.propagateTouched();
    }

  ngOnInit(): void {
  }



}
