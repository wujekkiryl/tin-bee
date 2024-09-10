import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[libCancelButton]',
  standalone: true,
})
export class CancelButtonDirective {
  @HostBinding('class') get classes(): string {
    return 'border-borderSecondary border';
  }
}
