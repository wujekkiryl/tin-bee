import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeUiNewNoteComponent } from './home-ui-new-note.component';

describe('HomeUiNewNoteComponent', () => {
  let component: HomeUiNewNoteComponent;
  let fixture: ComponentFixture<HomeUiNewNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUiNewNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeUiNewNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
