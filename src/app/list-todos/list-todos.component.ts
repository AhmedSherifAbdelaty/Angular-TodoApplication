import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../service/data/todo-data.service';

import { Router } from '@angular/router';
import { BasicAuthenticationService } from './../service/basic-authentication.service';

export class Todo {
  
  constructor(  public id : number  ,
                public description : string ,
                public done : boolean ,
                public targetDate : Date  ){
  
  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos: Todo[];
  message : string ;

  constructor(
    private todoDataService : TodoDataService ,
    private router : Router ,
    private basicAuthenticationService : BasicAuthenticationService
  ) { }

  ngOnInit() {
    this.refreshTodos();
   
  }

  refreshTodos(){
    this.todoDataService.retrieveAllTodos(this.basicAuthenticationService.getAuthenticatedUser()).subscribe(
      response => { 
        console.log(response);
        this.todos = response ;
      }
    )
  }

  deleteTodo(id ){
    this.todoDataService.deleteTodo('ahmed' , id).subscribe(
      response => {
        console.log(response);
        this.message = `todo ${id} is Deleted successfully`;
        this.refreshTodos();

      } 
    )
  }


  updateTodo(id){
   this.router.navigate(['todos' , id]);
  }



  addTodo(){
    this.router.navigate(['todos' , -1]);
  }


}
