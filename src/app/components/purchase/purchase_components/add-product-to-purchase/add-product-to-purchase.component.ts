import { CommonModule } from '@angular/common';
import { Component, Output,EventEmitter } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberFormatPipe } from '../../../../pipes/number-format.pipe';
import { ProductPurchaseDetails } from '../../../../models/purchase_model/product-purchase-details';
import { Taxe } from '../../../../models/purchase_model/taxe.enum';




@Component({
  selector: 'app-adding-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NumberFormatPipe, FormsModule],
  templateUrl: './add-product-to-purchase.component.html',
  styleUrl: './add-product-to-purchase.component.css'
})
export class AddingProductComponent {

  @Output() addingProductValidated = new EventEmitter<boolean>();
  @Output() productAdded = new EventEmitter<ProductPurchaseDetails>();


  numberFormatPipe: NumberFormatPipe = new NumberFormatPipe();
  isEdition: boolean = true;
  submitted: boolean = false;
  taxe = Object.values(Taxe);


  product: ProductPurchaseDetails = new ProductPurchaseDetails();

  constructor() { }


  addProduct() {
    const nextProduct = Object.assign({},this.product);
    this.productAdded.emit(nextProduct);
    // this.product = new ProductPurchaseDetails();
  }

  onSubmit(): void {
    
    this.submitted = true;
    if (!this.product.currentPurchasePrice || !this.product.currentSellingPrice || !this.product.product) {
      console.log('Formulaire declaré Non valid:', this.submitted);
      return;
    }

     this.addProduct();
    
  
  }



}


