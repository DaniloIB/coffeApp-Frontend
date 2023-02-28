import { Component, OnInit } from '@angular/core';
import { MisOrdenesService } from 'src/app/services/mis-ordenes.service';
import Swal from 'sweetalert2';
import { Product } from '../../models/product'
import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myShoppingCart:Product[] = [];
  uniqueProducts:Product[] = [];
  quantityArray:number[] = [];

  counter:number = 0;

  preciosFinal:number = 0;
 

  constructor( private storeService:StoreService, private misOrdenesSs:MisOrdenesService) { }


  ngOnInit(): void {
    

    this.storeService.myCart$.subscribe((products)=>{
      this.counter = products.length;
      this.myShoppingCart = products;
    })
    this.storeService.indexCart$.subscribe((quantityItems)=>{
       this.quantityArray = quantityItems;
    })
    this.storeService.subTotalValue$.subscribe((total)=>{
      this.preciosFinal = total;
    })
  }


  filterProducts():void{
    this.uniqueProducts = this.myShoppingCart.reduce((acc:Product[],item:Product)=>{
        if(!acc.includes(item)){
        acc.push(item);
    }
      return acc;
      },[])
  }

  addItem(index:any){ 
    this.storeService.agregarItem(index);
  }

  removeItem(index:any){
    this.storeService.sacarItem(index);
  }

  deleteItem(index:number){
    this.storeService.eliminarItem(index);
  }

  confirmarPedido(){
    if(this.misOrdenesSs.getOrdenRealizada()){
      Swal.fire({
        title: 'Ya tienes un pedido existente. ¿Quieres modificarlo?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.misOrdenesSs.agregarOrden(this.myShoppingCart, this.quantityArray);
          this.storeService.limpiarCarrito();
          Swal.fire('¡Pedido realizado!', '', 'success');
        } else if (result.isDenied) {
          Swal.fire('El pedido no se realizo', '', 'info')
        }
      })
    }else{
      this.misOrdenesSs.agregarOrden(this.myShoppingCart, this.quantityArray);
      Swal.fire({
        title: '¡Pedido Confirmado!',
        text: 'Pronto llegará el pedido a tu mesa. Puedes ver el detalle de tu compra en la sección "Mis Pedidos".',
        timer: 6000
      })
      Swal.update({
        icon: 'success',
      })
      this.storeService.limpiarCarrito();
    }


  }
}
