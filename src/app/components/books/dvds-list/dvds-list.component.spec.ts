import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdsListComponent } from './dvds-list.component';

describe('BooksListComponent', () => {
  let component: DvdsListComponent;
  let fixture: ComponentFixture<DvdsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvdsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DvdsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
