import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/Header";
import {Todos} from './Mycomponents/Todos';
import Footer from "./Mycomponents/Footer";
import {Addtods} from "./Mycomponents/Addtods";
import { About } from "./Mycomponents/About";
import { Information } from "./Mycomponents/Information";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  const onDelete = (todo)=>{
    console.log("i am on delete plese add on todo ",todo);
    //let index = todos.indexOf(todo);
    //todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const addTods = (title,desc) => {
    console.log("i am added to todo",title,desc)
    let sno = todos[todos.length-1].sno + 1;
    const mytodos ={
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,mytodos]);
    console.log(mytodos);
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      title: "Go to the bus stand",
      desc: "you need to to bus stand for being job done1"
    },
    {
      sno:2,
      title: "Go to the Railway station",
      desc: "you need to to Railway station for being job done2"
    },
    {
      sno:3,
      title: "Go to the mall",
      desc: "you need to to Mall for being job done 3"
    },
    {
      sno:4,
      title: "Go to the Market",
      desc: "you need to to market for being job done4"
    },
  ]);
  return (
    <> 
    <Router>
    <Header title="mytodoslists" searchBar={true}/>
    <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <Addtods addtods={addTods}/> 
            <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Information">
            <Information/>
          </Route>
        </Switch>   
      <Footer/>
    </Router>
    </>
  );
  }

export default App;
