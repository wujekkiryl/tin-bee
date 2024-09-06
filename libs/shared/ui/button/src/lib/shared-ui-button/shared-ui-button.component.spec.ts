import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUiButtonComponent } from './shared-ui-button.component';

describe('SharedUiButtonComponent', () => {
  let component: SharedUiButtonComponent;
  let fixture: ComponentFixture<SharedUiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
