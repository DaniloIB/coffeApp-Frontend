import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SearchFilterService } from 'src/app/services/search-filter.service';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent implements OnInit {

  comidas: Product[] = []

  comidasFiltradas: Product[] = []
  valueSelected: number = 0;

  constructor(private searchFilterService: SearchFilterService) { }

  ngOnInit(): void {
    this.searchFilterService.filterProducts();
    this.searchFilterService.comidasFiltradas$.subscribe((data) => {
      this.comidas = data;
    })
  }

  activedDulce() {
    this.valueSelected = 1;
    this.comidasFiltradas = this.comidas.filter((item) => {
      return item.idSubcategoria == 3;
    })
  }

  activedSalado() {
    this.valueSelected = 2;
    this.comidasFiltradas = this.comidas.filter((item) => {
      return item.idSubcategoria == 4;
    })
  }

  activedAll() {
    this.valueSelected = 0;
    this.comidasFiltradas = this.comidas;
  }

}
