import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/common/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Login = new Login();
  loading = false;
  islogin = true;
  error = '';
  success = '';
  constructor() { }

  ngOnInit() {
  }

  login() {
    this.success = '';
    if (this.user.username === '' || this.user.password === '') {
        this.error = 'username or password is required';
    } 
    else{
     // this.router.navigate(['/dashboard']);
    }
  }
}
