import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title ="VINCAMPUS"
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoWidth:true,
    URLhashListener: true,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
   
  }

  images=[
    {
      id:'0',
     text:'image1',
     image: "assets/images/64083.jpg",
     alt:'image'
    },
    {
      id:'1',
      text: 'image2',
      image: 'assets/images/64084.jpg',
      alt: 'image'
    },
    {
      id:'2',
      text: 'image3',
      image:'assets/images/64085.jpg',
      alt:'image'
    }
  ]



 

  constructor() { }

  ngOnInit() {
  }

}
