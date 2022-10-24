import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {UserService} from '@app/api/user.service';
import {LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-your-account',
  templateUrl: './create-your-account.page.html',
  styleUrls: ['./create-your-account.page.scss'],
})
export class CreateYourAccountPage implements OnInit {

  formData = {
    firstname:'',
    email:'',
    password:'',
    phoneNumber:'',
    understand: false,
    agree: false
  };

  submitAttempt = false;
  myForm: FormGroup;

  constructor(public nav: NavController
            , public formBuilder: FormBuilder
            , public userService: UserService
            , public loadingCtrl: LoadingController
            , public router: Router)
  {
    this.myForm = this.formBuilder.group({
      // eslint-disable-next-line max-len
      controlUserEmail:['', Validators.compose([Validators.maxLength(30), Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/), Validators.required])],
      // eslint-disable-next-line max-len
      controlUserPassword:['', Validators.compose([Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),Validators.required])],
      controlUserMobileNo:['', Validators.compose([Validators.pattern('^((\\+91-?)|0)?[0-9]{9}$'),Validators.required])],
      controlUserUnderstand:[false, Validators.compose([Validators.required])],
      controlUserAgree:[false, Validators.compose([Validators.required])],
      controlUserName:['', Validators.compose([Validators.required])]
      }
    );
  }

  ngOnInit() {
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Saving...',
      duration: 1500,
    });
    await loading.present();
  }

  async register(){
    this.submitAttempt=true;
    // eslint-disable-next-line max-len
    if(this.myForm.invalid === false){
      await this.userService.createUserWithEmailAndPassword(this.formData.email, this.formData.password).then((user) => {
        console.log('User ' + user.uid);
        this.userService.initializeDatabase(user.uid);
        this.userService.saveKeyValue('Name', this.formData.firstname);
        this.userService.saveKeyValue('Email', this.formData.email);
        this.userService.saveKeyValue('PhoneNumber', this.formData.phoneNumber);
        this.userService.saveKeyValue('Understand', this.formData.understand);
        this.userService.saveKeyValue('Agree', this.formData.agree);
        this.userService.saveKeyValue('Test', {firstQ : 2, secondQ: 6});

        this.formData.firstname='';
        this.formData.email='';
        this.formData.password='';
        this.formData.phoneNumber='';
        this.formData.understand=false;
        this.formData.agree=false;
        this.submitAttempt=false;
        this.router.navigate(['/welcome']);
      }).catch(e => {
        console.log('ERROR ' + e.code);
      }).finally(()=>{
         this.showLoading();
      });
    }
  }
}
