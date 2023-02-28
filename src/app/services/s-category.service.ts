import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class SCategoryService {

  categoryURL = "http://localhost:8080/categorias/"

  constructor( private http:HttpClient ) { }

  public listCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.categoryURL + "traerCategorias");
  }

  public getCategory(id:number):Observable<Category>{
    return this.http.get<Category>(this.categoryURL + `detail/${id}`)
  }
}
