import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { NoteView } from '@tin-bee/home/data-access';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { SecondaryButtonDirective } from '@tin-bee/shared/ui/button';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const notes: NoteView[] = [
    {
      id: '1',
      title: 'First note',
      content: 'This is the first note',
      dateAdded: new Date(),
    },
    {
      id: '2',
      title: 'Second note',
      content: 'This is the second note',
      dateAdded: new Date(),
    },
    {
      id: '3',
      title: 'Note Title',
      content:
        'Very long Note Body to give you an example on how the box should act',
      dateAdded: new Date(),
    },
    {
      id: '4',
      title: 'Note Title',
      content: 'Note Body',
      dateAdded: new Date(),
    },
    {
      id: '5',
      title: 'Note Title',
      content: 'Note Body',
      dateAdded: new Date(),
    },
    {
      id: '6',
      title: 'Note Title',
      content: 'Note Body',
      dateAdded: new Date(),
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show empty state when no notes has been added', () => {
    const emptyState = fixture.nativeElement.querySelector(
      'lib-home-ui-empty-state'
    );
    expect(emptyState).toBeTruthy();
  });

  it('should allow to add a new note when no notes has been added', () => {
    const newNoteButton = fixture.nativeElement.querySelector(
      'lib-shared-ui-button'
    );
    newNoteButton.click();
    fixture.detectChanges();
    const newNoteComponent = fixture.nativeElement.querySelector(
      'lib-home-ui-new-note'
    );
    const inputElements = fixture.nativeElement.querySelectorAll('input');
    console.log('Input Elements', inputElements);
    inputElements[0].value = 'Note Title';
    inputElements[1].value = 'Note Body';
    inputElements[0].dispatchEvent(new Event('input'));
    inputElements[1].dispatchEvent(new Event('input'));
    const addButton = fixture.nativeElement.querySelector(
      'lib-shared-ui-button[primary]'
    );
    addButton.click();
    expect(newNoteComponent).toBeTruthy();
    expect(newNoteComponent.textContent).toContain('Add new note');
  });
});
