import React, {useState} from "react";
import './App.css';
// importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
     <header>
       <h1>Logans Todo List</h1>
     </header>
     <Form setInputText={setInputText}/>
     <TodoList/>
    </div>
  );
}

export default App;
