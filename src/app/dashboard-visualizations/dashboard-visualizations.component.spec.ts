import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVisualizationsComponent } from './dashboard-visualizations.component';

describe('DashboardVisualizationsComponent', () => {
  let component: DashboardVisualizationsComponent;
  let fixture: ComponentFixture<DashboardVisualizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardVisualizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVisualizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
