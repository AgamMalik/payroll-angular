import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userObj: any = {
    username: '',
    password: '',
  };

  constructor(private router : Router){

  }

  onLogin() {
    if(this.userObj.username == "admin" && this.userObj.password == "123456"){
      // now we have to redirect from ts file not from html file.. so we have create a object of service of router(dependency injection)
      
      this.router.navigateByUrl('dashboard');

    }else{
      alert("username or password is wrong")
    }
  }
}
