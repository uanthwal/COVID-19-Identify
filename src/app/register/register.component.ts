import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';




@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  agreementCheckbox: boolean;
  submitted;

// Postal Code dropdown
/**
 showdropdown=false;
postal=['B3J 2K9', 'B41 1H1', 'B3H 2Z3', 'B45 HJ6'];
toggledropdown(){
  this.showdropdown=!this.showdropdown;
} 

selectValue(value){
  this.registerForm.patchValue({"postalcode":value});
  this.toggledropdown();
}

getpostalcodeValue(){
  return this.registerForm.value.postalcode;
}*/
  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _appService: AppService
  ) {}

  ngOnInit() {
    localStorage.clear();
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/),
        ],
      ],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(10),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      postalcode: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onClickAgreementCheckbox(value: boolean) {
    this.agreementCheckbox = value;
  }

  onClickRegisterBtn() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (!this.agreementCheckbox) return;
    let payload = {
      name: this.registerForm.controls['username'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
      mobile_number: this.registerForm.controls['mobile'].value,
      postal_code: this.registerForm.controls['postalcode'].value,
    };
    this._appService.registerUser(payload).subscribe((data: {}) => {
      if (data['code'] == 200) {
        alert(data['message']);
        this.onClickSignIn();
      } else {
        alert(data['message']);
      }
    });
  }

  onClickSignIn() {
    this._router.navigate(['/login']);
  }
}
