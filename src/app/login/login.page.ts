import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '@app/api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formData = {
    username:'',
    password:''
  };

  submitAttempt = false;
  myForm: FormGroup;

  constructor(public nav: NavController
    , public formBuilder: FormBuilder, private alertController: AlertController, private router: Router, public userService: UserService
    ) {
      this.myForm = this.formBuilder.group({
        // eslint-disable-next-line max-len
        controlUsername:['', Validators.compose([Validators.maxLength(30), Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/), Validators.required])],
        // eslint-disable-next-line max-len
        controlUserPassword:['', Validators.compose([Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),Validators.required])]
      }, {});


    }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Disclaimer',
      subHeader: '',
      message: 'Are you agree ?',
      buttons: [
        {
          text: 'DISAGREE',
          role: 'disagree',
        },
        {
          text: 'AGREE',
          role: 'agree',
          handler: () => {
            this.router.navigate(['/create-your-account']);
          }
        },
      ],
    });

    await alert.present();
  }

  async submitLogin(){
    this.submitAttempt = true;

    await this.userService.signInWithEmailAndPassword(this.formData.username, this.formData.password).then((user) => {
      console.log('User ' + user.uid);
    }).catch(e => {
      console.log('ERROR ' + e.code);
    });
  }
  ngOnInit() {}
}
