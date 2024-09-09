import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-shared-ui-input',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIcon],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SharedUiInputComponent,
      multi: true,
    },
  ],
  templateUrl: './shared-ui-input.component.html',
  styleUrl: './shared-ui-input.component.scss',
})
export class SharedUiInputComponent implements ControlValueAccessor {
  disabled = false;
  value = '';
  @Input() prefixIcon?: string;
  @Input() placeholder?: string;
  @Output() inputEvent = new EventEmitter<string>();

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  onChange = (value: string) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouch = () => {};

  registerOnChange(fn: never): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: never): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: string): void {
    this.value = obj;
  }

  changeValue($event: Event) {
    const value = ($event.target as HTMLInputElement).value;
    this.onChange(value);
    this.onTouch();
  }

  onInputEvent($event: Event) {
    const value = ($event.target as HTMLInputElement).value;
    this.value = value;
    this.inputEvent.emit(value);
  }
}
