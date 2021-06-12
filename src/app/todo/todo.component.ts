import { Component, OnInit } from '@angular/core';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from './../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from './../service/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id : number ;
  todo: Todo ;


  constructor(   
     private todoDataService : TodoDataService ,
     private route : ActivatedRoute ,
     private router : Router,
     private basicAuthenticationService : BasicAuthenticationService
        )
         { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo( this.id , '' , false , new Date());
    if (this.id != -1 ){
    this.todoDataService.retrieveTodo(this.basicAuthenticationService.getAuthenticatedUser() , this.id ).subscribe(
      response => this.todo = response 
      )
    }
  }


  saveTodo(){

      if (this.id == -1 ) {
        //Create Todo
        this.todoDataService.createTodo(this.basicAuthenticationService.getAuthenticatedUser() , this.todo)
        .subscribe(
          response => {
            this.router.navigate(['todos'])
          }
        )

      }

      else{
    this.todoDataService.updateTodo(this.basicAuthenticationService.getAuthenticatedUser() , this.id , this.todo)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['todos'])
      }
    )
    
  }


}

}
