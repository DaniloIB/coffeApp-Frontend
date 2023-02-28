import { Injectable } from '@angular/core';
import { SProductsService } from './s-products.service';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchFilterService {

  listaProductos: Product[] = [];
  soloBebidas: Product[] = [];
  uniqueProductsBebidas: Product[] = [];
  uniqueProductsComidas: Product[] = [];

  private bebidasFiltradas = new BehaviorSubject<Product[]>([]);
  public bebidasFiltradas$ = this.bebidasFiltradas.asObservable();

  private comidasFiltradas = new BehaviorSubject<Product[]>([]);
  public comidasFiltradas$ = this.comidasFiltradas.asObservable();

  constructor(private sProductsService: SProductsService) {
  }

  filterProducts() {
    this.traerProductos();
    this.getFilterCartBebidas();
    this.getFilterCartComidas();

    this.bebidasFiltradas.next(this.uniqueProductsBebidas);
    this.comidasFiltradas.next(this.uniqueProductsComidas);
  }

  /** Filtro de Comidas**/
  getFilterCartComidas(): void {
    this.uniqueProductsComidas = this.listaProductos.filter(producto => {
      return producto.idSubcategoria === 3 || producto.idSubcategoria === 4;
    })
  }

  /** Filtro de Bebidas**/
  getFilterCartBebidas(): void {
    this.uniqueProductsBebidas = this.listaProductos.filter(producto => {
      return producto.idSubcategoria === 1 || producto.idSubcategoria === 2;
    })
  }

  //Carga de productos
  traerProductos() {
    this.sProductsService.listProducts().subscribe((data) => {
      this.listaProductos = data;
    })
  }

}
