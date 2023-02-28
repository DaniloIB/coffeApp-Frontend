import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent implements OnInit {

  counter: number = 0;

  constructor(private storeService: StoreService, private router: Router) { }

  ngOnInit(): void {

    this.storeService.myCart$.subscribe((data) => {
      this.counter = data.length;
    })
  }
}
