import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private uniqueProduct: Product[] = [];
  private secondaryList: number[] = []; //lista con cantidad de veces que se repite elemento
  private subTotalArray: number[] = [];


  private myShoppingCart: Product[] = [];

  private myCart = new BehaviorSubject<Product[]>([]);
  public myCart$ = this.myCart.asObservable();

  private indexCart = new BehaviorSubject<number[]>([]);
  public indexCart$ = this.indexCart.asObservable();

  private subTotalValue = new BehaviorSubject<number>(0);
  public subTotalValue$ = this.subTotalValue.asObservable();

  constructor() {
  }

  getBooleanUniqueProduct(): boolean {
    if (this.uniqueProduct.length > 0)
      return true
    else
      return false
  }

  //Calcular Total
  calcularTotal(): void {
    var total: number = 0;
    for (let x = 0; x < this.myShoppingCart.length; x++) {
      this.subTotalArray[x] = this.secondaryList[x] * this.myShoppingCart[x].precio;
    }
    this.subTotalArray.forEach((item) => {
      total += item;
    });
    this.subTotalValue.next(total);
  }

  addProduct(newProduct: Product) {
    var flag: boolean = true;
    this.myShoppingCart.forEach(element => {
      if (element.id === newProduct.id) {
        flag = false;
      }
    });
    if (flag) {
      this.myShoppingCart.push(newProduct);
    }
    this.getFilterCart();

    //armo el array o agrego items
    this.verificarArray();
    this.calcularTotal();

    //emitir datos
    this.myCart.next(this.uniqueProduct);
    this.indexCart.next(this.secondaryList);

  }

  /* GEEEEEEEEEEET */
  getMyShoppingCart(): Product[] {
    return this.myShoppingCart;
  }


  getFilterCart(): void {
    this.uniqueProduct = this.myShoppingCart.reduce((acc: Product[], item: Product) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
      return acc;
    }, [])
  }

  //FUNCIOENS PARA MANIUPULAR AGREGAR ITEMS

  verificarArray() {
    if (this.secondaryList.length < 1)
      for (let x = 0; x < this.uniqueProduct.length; x++)
        this.secondaryList[x] = 1;
    else
      if (!(this.secondaryList.length === this.uniqueProduct.length))
        this.secondaryList.push(1);
  }


  //CALCULAR SUBTOTAL DE CADA ITEM
  agregarItem(index: any) {
    if (this.secondaryList[index] < 5) {
      this.secondaryList[index]++;
      this.calcularTotal();
    }

  }

  sacarItem(index: any) {
    if (this.secondaryList[index] > 0) {
      this.secondaryList[index]--;
      this.calcularTotal();
    }

  }

  //HAY QUE CREAR METODO DELETE HTTPREQUEST
  eliminarItem(index: number): void {
    this.secondaryList.splice(index, (index - 1));
    this.myShoppingCart.splice(index, index - 1);
  }

  //Limpiar carrito
  limpiarCarrito() {
    this.uniqueProduct = [];
    this.myShoppingCart = [];
    this.secondaryList = [];
    this.subTotalArray = [];
    this.myCart.next(this.uniqueProduct);
    this.indexCart.next(this.secondaryList);
    this.subTotalValue.next(0);

  }
}
