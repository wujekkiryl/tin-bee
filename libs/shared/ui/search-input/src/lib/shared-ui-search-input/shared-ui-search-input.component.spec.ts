import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUiSearchInputComponent } from './shared-ui-search-input.component';

describe('SharedUiSearchInputComponent', () => {
  let component: SharedUiSearchInputComponent;
  let fixture: ComponentFixture<SharedUiSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiSearchInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
