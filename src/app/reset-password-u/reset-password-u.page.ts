import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '@app/api/user.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-reset-password-u',
  templateUrl: './reset-password-u.page.html',
  styleUrls: ['./reset-password-u.page.scss'],
})
export class ResetPasswordUPage implements OnInit {

  formData={
    userEmail:''
  };
  myForm: FormGroup;
  submitAttempt = false;
  invalidEmail = false;
  // eslint-disable-next-line max-len
  constructor(public formBuilder: FormBuilder, private router: Router, public userService: UserService, private alertController: AlertController) { this.myForm = this.formBuilder.group({
    // eslint-disable-next-line max-len
    controlUserEmail:['', Validators.compose([Validators.maxLength(30), Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/), Validators.required])]
  });
  }

  ngOnInit() {
  }
  async verifyEmail(){
    this.submitAttempt=true;

    if(this.myForm.invalid === false){
      await this.userService.sendPasswordResetEmail(this.formData.userEmail).then((user) => {
        console.log('User '+this.formData.userEmail);
        //this.router.navigate(['/verification']);
        this.submitAttempt=false;
        this.invalidEmail=false;
        this.presentAlert();
      }).catch(e => {
        console.log('ERROR ' + e.code);
        this.invalidEmail=true;
      }).finally(()=>{

      });
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Reset link will be send to your email account. Please check it!',
      buttons: [{ text:'OK',
        handler: () => {
          this.router.navigate(['/login']);
        }
      }],
    });

    await alert.present();
  }

}
