import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
  sales = [
    { product: 'Produit 1', quantity: 2, store: 'Magasin A', date: new Date() },
    { product: 'Produit 2', quantity: 1, store: 'Magasin B', date: new Date() },
  ];

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async addSale() {
    const alert = await this.alertController.create({
      header: 'Ajouter une vente',
      inputs: [
        {
          name: 'product',
          type: 'text',
          placeholder: 'Nom du produit'
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantité'
        },
        {
          name: 'store',
          type: 'text',
          placeholder: 'Nom du magasin'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Ajouter',
          handler: (data) => {
            this.sales.push({
              product: data.product,
              quantity: parseInt(data.quantity),
              store: data.store,
              date: new Date()
            });
          }
        }
      ]
    });

    await alert.present();
  }
}