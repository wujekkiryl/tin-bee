import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[libPrimaryButton]',
  standalone: true,
})
export class PrimaryButtonDirective {
  @HostBinding('class') get classes(): string {
    return 'primary-button';
  }
}
