import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdTableComponent } from './bd-table.component';

describe('BdTableComponent', () => {
  let component: BdTableComponent;
  let fixture: ComponentFixture<BdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BdTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
