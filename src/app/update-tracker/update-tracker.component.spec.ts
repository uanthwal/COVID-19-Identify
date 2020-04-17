import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrackerComponent } from './update-tracker.component';

describe('UpdateTrackerComponent', () => {
  let component: UpdateTrackerComponent;
  let fixture: ComponentFixture<UpdateTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
