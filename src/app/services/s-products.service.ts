import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SProductsService {

  productsURL = "http://localhost:8080/productos"

  constructor(private http:HttpClient) {  }

  public listProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.productsURL + "/Allproducts")
  }


}
