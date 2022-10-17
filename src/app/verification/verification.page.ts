import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
  formData={
    userPin:''
  };
  myForm: FormGroup;
  submitAttempt = false;

  constructor(public formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      controlUserPin:['', Validators.compose([Validators.pattern('[0-9]{6}'),Validators.required])]
    }, {});
  }

  ngOnInit() {
  }

  async verifyCode(){
    this.submitAttempt=true;
    console.log('hi');
  }

}
