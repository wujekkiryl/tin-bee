import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUiInputComponent } from './shared-ui-input.component';

describe('SharedUiSearchInputComponent', () => {
  let component: SharedUiInputComponent;
  let fixture: ComponentFixture<SharedUiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
