import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SearchFilterService } from 'src/app/services/search-filter.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  bebidas:Product[] = [];
  bebidasFiltradas:Product[] = [];
  valueSelected:number = 0;

  constructor( private searchFilterService:SearchFilterService) { }

  ngOnInit(): void {
    this.valueSelected = 0;
    this.searchFilterService.filterProducts();

    this.searchFilterService.bebidasFiltradas$.subscribe((data)=>{
      this.bebidas = data;
    })
  }

  activedCoffee(){
    this.valueSelected = 1;
    this.bebidasFiltradas = this.bebidas.filter((item)=>{
      return item.idSubcategoria == 1;
    })
  }

  activedChocolate(){
    this.valueSelected = 2;
    this.bebidasFiltradas = this.bebidas.filter((item)=>{
      return item.idSubcategoria == 2;
    })
  }

  activedAll(){
    this.valueSelected = 0;
    this.bebidasFiltradas = this.bebidas;
    }
  

  
}
