import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit{
  public type: String = "password";
  public username:String = "";
  public password: String = "";
  public errors:any = {};

  constructor(){}

  ngOnInit(): void {

  }

  public login(){

  }

  public registrar(){

  }

  public showPassword(){

  }
}
