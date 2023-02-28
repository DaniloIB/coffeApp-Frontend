import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { SCategoryService } from 'src/app/services/s-category.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    nombre: "",
    descripcion: "",
    precio: 0,
    existencia: 0,
    valoracion: 0,
    imagenUrl: "",
    idSubcategoria: 0
  }

  category: Category = {
    id: 0,
    nombre: ""
  };

  constructor(private sCategoryService: SCategoryService) { }

  ngOnInit(): void {
    this.cargarCategoria();
  }

  cargarCategoria() {
    if (this.product.idSubcategoria >= 3) {
      this.sCategoryService.getCategory(2).subscribe((data) => {
        this.category = data;
      })
    }
    else {
      this.sCategoryService.getCategory(1).subscribe((data) => {
        this.category = data;
      })
    }
  }


}
