import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { NavController, AlertController, ActionSheetController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import { Router, NavigationExtras } from '@angular/router';
import { Product } from 'src/models/interface-products';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
Articles:Product[];
  
 // navigationExtras: NavigationExtras = { state: { foo: this.Articles } };
  constructor(private router: Router,public alertController: AlertController,public actionSheetController: ActionSheetController) {

    this.Articles=[
      {
        title:'البقلاوة',
        description:'البقلاوة التونسية هِي مُعَجَّنَات مُحلاة تَتكون من طَبَقات رقيقة من العجين وتُحشى بالمكسرات كاللوز والفستق  وتُحلى بسكب القطر أو العسل .. طريقة صنع و تحضير البقلاوة من نسمة كويزين :  ',
        pictures : [
          'assets/imgs/p1/a1.jpg',
          'assets/imgs/p1/a2.jpg',
          'assets/imgs/p1/a.jpg'
                  ],
        id:'1',
        price :45,
        categorie:'Sucré gateaux',
        state:'Nouveau',
        createdAt : new Date(),
        availability: { 
          available:true,
          type:'livraison',
          feed:500       
         },
        city:'Elguettar',
        averageStar:4
  }     ,

  {
    title:'الميلفاي',
    description:'الميل الفاي من أشهر المربطبات في تونس محبوبة جداً تجمع بين القرمشة والكريمة، اليكم طريقة تحضير إقتصادية و شهية',
    pictures : [
      'assets/imgs/p3/c.jpg',
      'assets/imgs/p3/c1.jpg',
      'assets/imgs/p3/c2.jpg'
              ],
    id:'2',
    price :5,
    categorie:'قسم الحلويات و المرطبات',
    state:'حلويات العائلة',
    createdAt : new Date(),
    availability: { 
      available:false,
      type:'livraison',
      feed:500       
     },
    city:'Elguettar',
    averageStar:4
}     ,
{
  title:'حلويات محلية',
  description:'تكاسم تقدم الخدمات المثالية لتصميم الكيك لجميع انواع المناسبات وحفلات الزفاف في تونس مع الابداع والابتكار في تصميم اجمل الكيك في العالم..',
  pictures : [
    'assets/imgs/p2/b.jpg',
    'assets/imgs/p2/b2.jpg',
    'assets/imgs/p2/b1.jpg'
            ],
  id:'3',
  price :50,
  categorie:'Sucré gateaux',
  state:'Nouveau',
  createdAt : new Date(),
  availability: { 
    available:true,
    type:'livraison',
    feed:500       
   },
  city:'Elguettar',
  averageStar:3
}     
  ]}

 
   showDetails(art:Product):void
      {let navigationExtras: NavigationExtras = { state: { foo: art} };
        this.router.navigate(['details'],navigationExtras);
      }
 /*
     // showdetailsarticle(data :any):void

    //  {   }




    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'test dalert',
        message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
    }



    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Albums',
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
    }

*/

























    }
