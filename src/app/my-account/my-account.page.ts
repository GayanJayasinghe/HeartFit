import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {UserService} from '@app/api/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  formData={
    password:'',
    phoneNumber:''
  };
  myForm: FormGroup;
  submitAttempt = false;
  constructor(public nav: NavController,public formBuilder: FormBuilder, public userService: UserService) {
    // @ts-ignore
    this.myForm = this.formBuilder.group({
        // eslint-disable-next-line max-len
        controlUserPassword:['', Validators.compose([Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),Validators.required])],
        controlUserMobileNo:['', Validators.compose([Validators.pattern('^((\\+91-?)|0)?[0-9]{9}$'),Validators.required])],
    }
    );
  }

  ngOnInit() {
  }

  async submitData(){
    this.submitAttempt = true;
    if(this.myForm.invalid === false){
      //this.userService.saveKeyValue('Password', this.formData.password);
      //console.log(this.formData.password);
      this.userService.saveKeyValue('PhoneNumber', this.formData.phoneNumber);
    }
  }
}
