import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[libSecondaryButton]',
  standalone: true,
})
export class SecondaryButtonDirective {
  @HostBinding('class') get classes(): string {
    return 'border-borderSecondary border text-xl';
  }
}
