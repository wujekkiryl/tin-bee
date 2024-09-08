import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUiDialogComponent } from './shared-ui-dialog.component';

describe('SharedUiDialogComponent', () => {
  let component: SharedUiDialogComponent;
  let fixture: ComponentFixture<SharedUiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
