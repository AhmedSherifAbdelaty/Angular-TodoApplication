import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from './../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn : boolean = false ;
  username : string = '';
  constructor(
      private basicAuthenticationService : BasicAuthenticationService) {
       }

  ngOnInit() {
    this.username  = this.basicAuthenticationService.getAuthenticatedUser() ;

  //  this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
