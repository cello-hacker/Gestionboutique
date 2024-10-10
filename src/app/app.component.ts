import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/home', icon: 'home' },
    { title: 'Produits', url: '/products', icon: 'cube' },
    { title: 'Ventes', url: '/sales', icon: 'cart' },
    { title: 'Statistiques', url: '/stats', icon: 'bar-chart' },
  ];
  constructor() {}
}