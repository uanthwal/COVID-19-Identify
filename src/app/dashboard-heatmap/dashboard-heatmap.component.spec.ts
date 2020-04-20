import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeatmapComponent } from './dashboard-heatmap.component';

describe('DashboardHeatmapComponent', () => {
  let component: DashboardHeatmapComponent;
  let fixture: ComponentFixture<DashboardHeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
