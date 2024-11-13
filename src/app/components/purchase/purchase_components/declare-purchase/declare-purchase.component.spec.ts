import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarePurchaseComponent } from './declare-purchase.component';

describe('DeclarePurchaseComponent', () => {
  let component: DeclarePurchaseComponent;
  let fixture: ComponentFixture<DeclarePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeclarePurchaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeclarePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
