import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class HelloWorldBean{
  constructor( public  message:string ) {

  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient

  ) { }


  executeHellowWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }


  executeHellowWorldWithPathVarible(name){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-varible/${name}` ,
    );

  }


  





}
