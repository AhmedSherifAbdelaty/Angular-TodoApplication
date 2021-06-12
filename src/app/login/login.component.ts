import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'user';
  password = 'dummy';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router : Router ,
              public hardcodedAuthenticationService : HardcodedAuthenticationService,
              private basicAuthenticationService : BasicAuthenticationService) { } 

  ngOnInit() {
  }

  // handleLogin(){
  //     if (this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
  //     this.router.navigate(['welcome', this.username]);
  //     this.invalidLogin = false ;
  //   }else{
  //     this.invalidLogin = true ;
  //   }
  // }



  handleBasicAuthLogin(){

      this.basicAuthenticationService.executeAuthenticationService
      (this.username,this.password)
      .subscribe(
        response => {
          console.log(response)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false 
        },
        error => {
          console.log(error)
          this.invalidLogin = true 
       }
      )
      }

      handleJWTLogin(){

        this.basicAuthenticationService.executeJWTAuthenticationService
        (this.username,this.password)
        .subscribe(
          response => {
            console.log(response)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false 
          },
          error => {
            console.log(error)
            this.invalidLogin = true 
         }
        )
        }


      
}
