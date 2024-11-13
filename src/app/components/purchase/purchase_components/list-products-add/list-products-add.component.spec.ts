import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsAddComponent } from './list-products-add.component';

describe('ListProductsAddComponent', () => {
  let component: ListProductsAddComponent;
  let fixture: ComponentFixture<ListProductsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProductsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProductsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
