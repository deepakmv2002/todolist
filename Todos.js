import React from 'react';
import {Todoitem} from "./Todoitem";

export const Todos = (props) => {
  return( 
     <div className="container">
      <h3 className="text-center"> Todos list</h3>
      {props.todos.length===0? "no todos lists to display":
     props.todos.map((todo)=>{
       return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
     }) 
    }
    </div>
  );
}
