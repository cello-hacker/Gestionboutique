import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  totalSales: number = 0;
  bestSellingProduct: string = '';
  bestPerformingStore: string = '';

  constructor() { }

  ngOnInit() {
    // Ces valeurs devraient être calculées à partir des données réelles
    this.totalSales = 150;
    this.bestSellingProduct = 'Produit 1';
    this.bestPerformingStore = 'Magasin A';
  }
}