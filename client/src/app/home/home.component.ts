import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public imageSources: string[] = [
    "assets/images/64080.jpg",
    "assets/images/64081.jpg",
    "assets/images/64082.jpg"
  ];
  
 public config: ICarouselConfig = {
  verifyBeforeLoad: true,
  log: false,
  animation: true,
  animationType: AnimationConfig.SLIDE,
  autoplay: true,
  autoplayDelay: 2000,
  stopAutoplayMinWidth: 768
};

  constructor() { }

  ngOnInit() {
  }

}
