import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

// let name: string;
// let age: number;
// let isStudent: boolean;
// let hobbies: number[];
// //Tuples
// let role: [number, string];
// //object
// type Person = {
//   name: string;
//   age: number;
// };

// let person: Person = {
//   name: "Simi",
//   age: 5,
// };

// function printName(name:string) {
//   console.log(name);
// }

const App: React.FC = () => {
  //State
  const [todo, setTodo] = useState<string>("");
  console.log(todo);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    //if things are inside todo
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      //Empty the todo field
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList  todos={todos} setTodos={setTodos}/>

      {/* {todos.map((t) => (
        <li>{t.todo}</li>
      ))} */}
    </div>
  );
};

export default App;
