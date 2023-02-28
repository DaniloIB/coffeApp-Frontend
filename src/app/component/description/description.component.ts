import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { StoreService } from 'src/app/services/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() selectedProduct: Product = {
    id: 0,
    nombre: "",
    descripcion: "",
    precio: 0,
    valoracion: 0,
    imagenUrl: "",
    existencia: 0,
    idSubcategoria: 0
  };

  @Output() addedProduct = new EventEmitter<Product>();

  productosCarrito: Product[] = [];
  imgSeleccionada: string = "";
  counter: number = 0;

  constructor(private storeService: StoreService) {

  }

  ngOnInit(): void {
    setInterval(() => {
      this.imgSeleccionada = this.selectedProduct.imagenUrl;
    }, 1)

    this.storeService.myCart$.subscribe(data => {
      this.productosCarrito = data;
    })
  }

  itemAdd(): void {
    this.counter++;
  }

  itemRemove(): void {
    if (this.counter > 0)
      this.counter--;
  }

  imgSelected(imgSrc: string) {
    this.imgSeleccionada = imgSrc;
  }

  onAddToCart() {
    let productoEnCarrito = false;
    this.productosCarrito.forEach((producto) => {
      if (producto.id === this.selectedProduct.id)
        productoEnCarrito = true;
    })
    if (productoEnCarrito) {
      Swal.fire({
        title: 'Este producto ya esta en tu carrito de compras.',
        text: '',
        timerProgressBar: true,
        timer: 1500,
      })
      Swal.update({
        icon: 'info',
      })
    }
    else {
      this.addedProduct.emit(this.selectedProduct);
      Swal.fire({
        title: '¡Listo!',
        text: 'Producto añadido al carrito de compras',
        timerProgressBar: true,
        timer: 1500,
      })
      Swal.update({
        icon: 'success',
      })
    }
  }

}
