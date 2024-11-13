import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PurchaseComponent, HomeComponent, RouterLink,RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BusinessManageFront';
  isParent = true;
constructor() {}
}
