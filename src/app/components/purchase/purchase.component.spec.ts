import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseComponent } from './purchase.component';

describe('PurchaseComponent', () => {
  let component: PurchaseComponent;
  let fixture: ComponentFixture<PurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Définir PurchaseValidated sur true lorsque onPurchaseValidated est appelé avec true', () => {
    const purchaseComponent = new PurchaseComponent();
    purchaseComponent.onPurchaseValidated(true);
    expect(purchaseComponent.purchaseValidated).toBeTrue();
  });

  it('Doit être défini sur true lorsque onSubmit est appelé', () => {
    const purchaseComponent = new PurchaseComponent();
    purchaseComponent.onSubmit();
    expect(purchaseComponent.submitted).toBeTrue();
  });

});
