import { Product } from "./product";
import { Taxe } from "./taxe.enum";

export class ProductPurchaseDetails {
  currentPurchasePrice: string ='';
  currentSellingPrice: string='';
  taxe: Taxe  = Taxe.TVA_20; 
  product: Product= new Product();
  
}