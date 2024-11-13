import { Component, ViewChild } from '@angular/core';
import { DeclarePurchaseComponent } from './purchase_components/declare-purchase/declare-purchase.component';
import { AddingProductComponent } from './purchase_components/add-product-to-purchase/add-product-to-purchase.component';
import { CommonModule } from '@angular/common';
import { ListProductsAddComponent } from './purchase_components/list-products-add/list-products-add.component';
import { ProductPurchaseDetails } from '../../models/purchase_model/product-purchase-details';


@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [DeclarePurchaseComponent, AddingProductComponent, CommonModule,ListProductsAddComponent],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})

export class PurchaseComponent {
  purchaseValidated = false;
  submitted = false;
  @ViewChild(DeclarePurchaseComponent) declarePurchaseComponent: DeclarePurchaseComponent | undefined;
  @ViewChild(AddingProductComponent) addingProductComponent: AddingProductComponent | undefined;


  onPurchaseValidated(validated: boolean) {
    this.purchaseValidated = validated;
  }

  listeDesProduits: ProductPurchaseDetails[] = [];
  onProductAdded(newProduct: ProductPurchaseDetails) {
    this.listeDesProduits.push(newProduct);
  }
 

  onSubmit(): void {
    this.submitted = true;
    
}
}
