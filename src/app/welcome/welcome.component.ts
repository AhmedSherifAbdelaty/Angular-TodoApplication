import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessageFromService = '';

  constructor(private route : ActivatedRoute , 
              private welcomeDataService : WelcomeDataService) {
   }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    this.welcomeDataService.executeHellowWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)

    );

      console.log("last line of getWelcomeMessage");

  }

  

  getWelcomeMessageWithParamter(){
    this.welcomeDataService.executeHellowWorldWithPathVarible(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)

    );

      console.log("last line of getWelcomeMessage");

  }


  handleSuccessfulResponse(response){
    console.log(response);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error){
    console.log(error);
    this.welcomeMessageFromService = error.error.message ;
  }


}
