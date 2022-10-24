import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-my-program',
  templateUrl: './my-program.page.html',
  styleUrls: ['./my-program.page.scss'],
})
export class MyProgramPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  setupProgram(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'To set up your 6-month exercise programme, please go to this LINK!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
