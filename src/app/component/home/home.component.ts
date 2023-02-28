import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProfileService } from 'src/app/services/profile.service';
import { SProductsService } from 'src/app/services/s-products.service';
import { SearchFilterService } from 'src/app/services/search-filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = "";
  findProduct: string = "";

  productosBbdd: Product[] = [];

  constructor(private profileS: ProfileService, private searchFilterService: SearchFilterService, private Sproduct: SProductsService) { }

  ngOnInit(): void {
    this.profileS.nombreUsuario$.subscribe((data) => {
      this.name = data;
    })
    this.filtrarProductos();
    this.getProductos();
  }

  filtrarProductos() {
    this.searchFilterService.filterProducts();
  }

  //Peticion de productos a BBDD
  getProductos() {
    this.Sproduct.listProducts().subscribe(data => {
      this.productosBbdd = data;
    })
  }

}
