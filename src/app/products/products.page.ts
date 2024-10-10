import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products = [
    { name: 'Produit 1', barcode: '123456', stock: 10 },
    { name: 'Produit 2', barcode: '234567', stock: 15 },
  ];

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async addProduct() {
    const alert = await this.alertController.create({
      header: 'Ajouter un produit',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nom du produit'
        },
        {
          name: 'stock',
          type: 'number',
          placeholder: 'Stock initial'
        }
      ],
      buttons: [
        {
          text: 'Scanner le code-barres',
          handler: () => {
            this.scanBarcode();
          }
        },
        {
          text: 'Ajouter',
          handler: (data) => {
            this.products.push({
              name: data.name,
              barcode: 'XXXXXX',
              stock: parseInt(data.stock)
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async editProduct(product) {
    const alert = await this.alertController.create({
      header: 'Modifier le produit',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: product.name,
          placeholder: 'Nom du produit'
        },
        {
          name: 'stock',
          type: 'number',
          value: product.stock,
          placeholder: 'Stock'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Sauvegarder',
          handler: (data) => {
            product.name = data.name;
            product.stock = parseInt(data.stock);
          }
        }
      ]
    });

    await alert.present();
  }

  async scanBarcode() {
    try {
      const result = await BarcodeScanner.scan();
      if (result.hasContent) {
        console.log(result.content);
        // Utilisez le code-barres scanné ici
      }
    } catch (error) {
      console.error('Erreur lors du scan:', error);
    }
  }
}