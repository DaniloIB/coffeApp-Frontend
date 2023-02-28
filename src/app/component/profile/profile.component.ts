import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MisOrdenesService } from 'src/app/services/mis-ordenes.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cantidadProductos: number[] = [];
  listaProductos: Product[] = [];
  subTotal: number = 0;

  constructor(private misOrdenesSs: MisOrdenesService) { }

  ngOnInit(): void {
    this.misOrdenesSs.getCantidadProductos;
    this.misOrdenesSs.miOrden$.subscribe((productos) => {
      this.listaProductos = productos;
    });

    this.misOrdenesSs.cantidadProductos$.subscribe((data) => {
      this.cantidadProductos = data;
    })

    this.listaProductos.forEach((producto, i) => {
      this.subTotal += producto.precio * this.cantidadProductos[i];
    })
  }
}
