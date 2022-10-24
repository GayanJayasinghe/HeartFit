import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-heart-health',
  templateUrl: './heart-health.page.html',
  styleUrls: ['./heart-health.page.scss'],
})
export class HeartHealthPage implements OnInit {
  public imagesList= [
        {description:'Women Party Shoes Will Be The Next New Thing 1!',
          picUrl:'https://pm.epages.com/WebRoot/Store/Shops/apidocu/51E7/F905/2E4C/78C2/30C2/AC14/145F/A4E5/013-headphone-red_m.jpg'},
        {description:'Women Party Shoes Will Be The Next New Thing 2!',
          picUrl:'https://pm.epages.com/WebRoot/Store/Shops/apidocu/51E7/F905/2E4C/78C2/30C2/AC14/145F/A4E5/013-headphone-red_m.jpg'},
        {description:'Women Party Shoes Will Be The Next New Thing 3!',
          picUrl:'https://pm.epages.com/WebRoot/Store/Shops/apidocu/51E7/F905/2E4C/78C2/30C2/AC14/145F/A4E5/013-headphone-red_m.jpg'},
        {description:'Women Party Shoes Will Be The Next New Thing 4!',
          picUrl:'https://pm.epages.com/WebRoot/Store/Shops/apidocu/51E7/F905/2E4C/78C2/30C2/AC14/145F/A4E5/013-headphone-red_m.jpg'},
        ];

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
  }
}
