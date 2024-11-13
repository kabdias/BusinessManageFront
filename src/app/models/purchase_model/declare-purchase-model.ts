import { PaymentMode } from "./payment-modes.enum";

export class DeclarePurchaseModel {
    buyingDate: Date | null= null;
    providerName: string = '';
    providerAddress: string='';
    paymentMode: PaymentMode = PaymentMode.CARTE_BANCAIRE;

  }