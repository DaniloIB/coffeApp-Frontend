import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MisOrdenesService {
  private ordenActiva: boolean = false;

  private miOrden = new BehaviorSubject<Product[]>([]);
  public miOrden$ = this.miOrden.asObservable();

  private cantidadProductos = new BehaviorSubject<number[]>([]);
  public cantidadProductos$ = this.cantidadProductos.asObservable();


  constructor() { }

  getOrdenRealizada(): boolean {
    return this.ordenActiva;
  }
  getCantidadProductos() {
    return this.cantidadProductos;
  }

  agregarOrden(productos: Product[], cantidad: number[]) {
    this.ordenActiva = true;
    this.miOrden.next(productos);
    this.cantidadProductos.next(cantidad);
  }
}
