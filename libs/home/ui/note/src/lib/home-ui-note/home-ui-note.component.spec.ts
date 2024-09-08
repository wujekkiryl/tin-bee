import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeUiNoteComponent } from './home-ui-note.component';

describe('HomeUiNoteComponent', () => {
  let component: HomeUiNoteComponent;
  let fixture: ComponentFixture<HomeUiNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUiNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeUiNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
