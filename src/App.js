import React, {useState, useRef} from "react";
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState("")
  const inputTask = useRef(null)


  function addEvent(){
    setTodoList([...todoList, {task : currentTask, completed : false}])
    inputTask.current.value = ""
  }

  function delTask(taskTodel){
    setTodoList(todoList.filter((task) => {
      return task.task !== taskTodel
    }
      
    ))
  }

  const completeTask = (taskToComplete) => {
    setTodoList(todoList.map((task) => {
      return (task.task === taskToComplete ? {
        task : taskToComplete, completed : true
      } : {task : task.task, completed : task.completed ? true : false})
    }

    ))
  }

  return (
    <div className="App">
      <h1>To Do List</h1>

      <div>
        <input type="text" placeholder = "Get Shit Done!" onChange={(event) => setCurrentTask(event.target.value)} ref={inputTask} onKeyDown = {(event) => {if(event.keyCode === 13){
          addEvent()
        }}}/>
        <button onClick={(addEvent)}>Add task</button>
      </div>
      <hr></hr>
      <ul>
        {todoList.map((val, key) => {
          return (
            <div className="taskDisplay">
              <li key={key}>
                {val.task}
              </li>
              <button onClick={() => completeTask(val.task)}>Completed</button>
              <button onClick={() => delTask(val.task)}>X</button>
              {val.completed ? <h2>Task Completed</h2> : <h2>Task Not Completed</h2>}
            </div>
          )
        } 

        )}
      </ul>
    </div>
    

  );
}

export default App;
