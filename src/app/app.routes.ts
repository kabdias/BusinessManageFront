import { Routes } from '@angular/router';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'achat', component: PurchaseComponent },
    { path: 'home', component: HomeComponent },
];
