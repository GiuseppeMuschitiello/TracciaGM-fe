import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdDetailsComponent } from './dvd-details.component';

describe('DvdDetailsComponent', () => {
  let component: DvdDetailsComponent;
  let fixture: ComponentFixture<DvdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvdDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DvdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
