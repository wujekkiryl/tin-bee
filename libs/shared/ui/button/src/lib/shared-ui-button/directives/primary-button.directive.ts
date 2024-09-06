import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[libPrimaryButton]',
  standalone: true,
})
export class PrimaryButtonDirective {
  @HostBinding('class') get classes(): string {
    return 'text-md font-thin bg-purple text-white';
  }
}
