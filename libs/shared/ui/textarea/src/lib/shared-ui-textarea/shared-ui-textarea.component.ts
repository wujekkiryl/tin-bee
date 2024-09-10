import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-shared-ui-textarea',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SharedUiTextareaComponent,
      multi: true,
    },
  ],
  templateUrl: './shared-ui-textarea.component.html',
  styleUrl: './shared-ui-textarea.component.scss',
})
export class SharedUiTextareaComponent implements ControlValueAccessor {
  disabled = false;
  value = '';
  @Input() placeholder?: string;
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
}
