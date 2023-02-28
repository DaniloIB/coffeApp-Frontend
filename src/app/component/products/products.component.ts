import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SProductsService } from 'src/app/services/s-products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  @Input() productosBbdd: Product[] = [];
  descriptionActive: boolean = false;

  productSelected: Product = {
    id: 0,
    nombre: "",
    descripcion: "",
    precio: 0,
    existencia: 0,
    valoracion: 0,
    imagenUrl: "",
    idSubcategoria: 0,
  };

  constructor(private storeService: StoreService, private Sproduct: SProductsService) { }

  ngOnInit(): void {
  }

  openDescription(product: Product): void {
    this.descriptionActive = !this.descriptionActive;
    this.productSelected = product;
  }

  closeDescription() {
    this.descriptionActive = !this.descriptionActive;
  }

  addToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
  }

}
