import { Component, Input } from '@angular/core';
import { ProductPurchaseDetails } from '../../../../models/purchase_model/product-purchase-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-products-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-products-add.component.html',
  styleUrl: './list-products-add.component.css'
})
export class ListProductsAddComponent {
  @Input() products: ProductPurchaseDetails[] = [];

  constructor() { }

}
