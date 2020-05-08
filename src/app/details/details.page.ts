import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/interface-products';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
}) 

export class DetailsPage implements OnInit {
  
productdetails:Product 
  constructor( private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
    
      this.productdetails=this.router.getCurrentNavigation().extras.state.foo;
        console.log(this.productdetails);  }});
    }

  ngOnInit() {
  }
  @ViewChild('mySlider',{static: false}) slider: IonSlides;
  sliderOpts = {
      
      autoplay: true,
      speed: 1000,
      
    };




  goback():void
  {
this.router.navigateByUrl('/home')
  }



}
