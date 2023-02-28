import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sliderPosition: number = 0;
  sliderItems: string[] = ["http://drive.google.com/uc?export=view&id=1PLnQvcvASNf9y5tPNa2Oal1ejE9L04BM",
    "http://drive.google.com/uc?export=view&id=17MyRrUTxadGSBzRosGRGjzi11_nXdt7x",
    "http://drive.google.com/uc?export=view&id=18mvOqe2neS6UXK5W-wTe_zP-s1L98bxU"];


  next(): void {
    if (this.sliderPosition < 2)
      this.sliderPosition++;
    else
      this.sliderPosition = 0;
  }

  prev(): void {
    if (this.sliderPosition > 0)
      this.sliderPosition--;
    else
      this.sliderPosition = 2;
    console.log(this.sliderPosition)
  }
}
