import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted;
  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _appService: AppService
  ) {}

  ngOnInit() {
    localStorage.clear();
    this.registerForm = this.formBuilder.group({
      
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(10),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }


  onClickLoginBtn() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    let payload = {
      password: this.registerForm.controls['password'].value,
      mobile_number: this.registerForm.controls['mobile'].value
    };
    this._appService.login(payload).subscribe((data: {}) => {
      if (data['code'] == 200) {
        this._appService.setSessionId(data['session_id']);
        this._appService.setUserId(data['user_id']);
        this.onClickSignup();
      } else {
        alert(data['message']);
      }
    });
  }

  onClickSignup() {
    this._router.navigate(['/home']);
  }
}
