import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  mobileNumber;
  password;
  constructor() {}

  ngOnInit() {}

  loginUser() {
    var number = this.mobileNumber;
    var password = this.password;
    console.log(number);
    console.log(password);
  }
}
