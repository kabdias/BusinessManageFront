import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentMode } from '../../../../models/purchase_model/payment-modes.enum';
import { DeclarePurchaseModel } from '../../../../models/purchase_model/declare-purchase-model';

@Component({
  selector: 'app-declare-purchase',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './declare-purchase.component.html',
  styleUrl: './declare-purchase.component.css'
})

export class DeclarePurchaseComponent {
  //proprieté d'accès au formulaire de déclaration des achats
  @Output() purchaseValidated = new EventEmitter<boolean>();

  purchaseForm: DeclarePurchaseModel = new DeclarePurchaseModel();

  isEdit = false;
  paymentModes = Object.values(PaymentMode);
  submitted = false;

  constructor() {}

  onSubmit(): void {
    this.submitted = true;
    
    if (!this.purchaseForm.buyingDate || !this.purchaseForm.paymentMode) {
      console.log('Formulaire declaré Non valid:', this.purchaseForm);
      return;
    }
    
    this.purchaseValidated.emit(true);
    this.isEdit = true;
    console.log('Formulaire declaré validé:', this.purchaseForm);
  }

  edit() {
    if (this.isEdit) {
      this.isEdit = false;
    } 
   
  }

  
}