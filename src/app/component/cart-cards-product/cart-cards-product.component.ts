import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-cards-product',
  templateUrl: './cart-cards-product.component.html',
  styleUrls: ['./cart-cards-product.component.css']
})
export class CartCardsProductComponent implements OnInit {

  counterProducts:number[] = [];

  counter:number = 0;

  @Output() quantityItems = new EventEmitter<{}>();

  @Input() productCart:Product = {
    id: 0,
    nombre: "",
    descripcion: "",
    precio: 0,
    existencia: 0,
    valoracion:0,
    imagenUrl : "",
    idSubcategoria : 0
  };

  subTotal:number = 1;

  constructor( ) { }

  ngOnInit(): void {
    if(this.subTotal === 1)
      this.subTotal = this.productCart.precio;
    
  }

  addItem(){ 
    if(this.counter < 5){
      this.counter++;
    }
  }

  removeItem(){
    if(this.counter > 0)
      this.counter--;
  }

}
