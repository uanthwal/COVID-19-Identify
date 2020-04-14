import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTrackerComponent } from './create-new-tracker.component';

describe('CreateNewTrackerComponent', () => {
  let component: CreateNewTrackerComponent;
  let fixture: ComponentFixture<CreateNewTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
