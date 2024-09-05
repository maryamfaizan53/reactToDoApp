import AppName from "./components/appname";
import AppToDo from "./components/apptodo";
import ToDoItem1 from "./components/todoitem1";
import ToDoItem2 from "./components/todoitem2";
import "./App.css";

const App = () => {
  return (
   <center className="todo-container">
    <AppName/>
    <AppToDo/>
    <div className="items-container">
    <ToDoItem1/>
    <ToDoItem2/>
    </div>
   </center>
  )
}

export default App;
