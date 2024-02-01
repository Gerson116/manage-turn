import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnMaintenanceComponent } from './turn-maintenance.component';

describe('TurnMaintenanceComponent', () => {
  let component: TurnMaintenanceComponent;
  let fixture: ComponentFixture<TurnMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TurnMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
