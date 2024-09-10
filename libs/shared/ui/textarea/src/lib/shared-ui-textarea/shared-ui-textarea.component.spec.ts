import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUiTextareaComponent } from './shared-ui-textarea.component';

describe('SharedUiTextareaComponent', () => {
  let component: SharedUiTextareaComponent;
  let fixture: ComponentFixture<SharedUiTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiTextareaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
