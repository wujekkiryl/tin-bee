import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeUiEmptyStateComponent } from './home-ui-empty-state.component';

describe('HomeUiEmptyStateComponent', () => {
  let component: HomeUiEmptyStateComponent;
  let fixture: ComponentFixture<HomeUiEmptyStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUiEmptyStateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeUiEmptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
