import React, { useState } from 'react';

function App(){

  // 10(a) Form
  const [name, setName] = useState("");

  // 10(c) Counter
  const [count, setCount] = useState(0);

  // 11(a) Conditional
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // 11(b,c) List
  const students = ["Prasanna", "Ravi", "Divya"];

  // 12 To-Do
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  // Form submit
  function handleSubmit(e){
    e.preventDefault();
    alert("Submitted Name: " + name);
  }

  // Event handling
  function showMessage(){
    alert("Button Clicked");
  }

  // Add task
  function addTask(){
    if(task !== ""){
      setList([...list, task]);
      setTask("");
    }
  }

  // Delete task
  function deleteTask(index){
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  return(
    <div style={{padding:"20px"}}>

      <h1>10 + 11 + 12 Combined Program</h1>

      {/* 10(a) Form */}
      <h2>Form Handling</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Enter name"
        />
        <br/><br/>
        <button type="submit">Submit</button>
      </form>

      <hr/>

      {/* 10(b) Event */}
      <h2>Event Handling</h2>
      <button onClick={showMessage}>Click Me</button>

      <hr/>

      {/* 10(c) Counter */}
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>

      <hr/>

      {/* 11(a) Conditional */}
      <h2>Conditional Rendering</h2>
      {isLoggedIn ? <h3>Welcome User</h3> : <h3>Please Login</h3>}
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>

      <hr/>

      {/* 11(b) List */}
      <h2>Student List</h2>
      <ul>
        {students.map((name) => (
          <li>{name}</li>
        ))}
      </ul>

      <hr/>

      {/* 11(c) Keys */}
      <h2>Student List with Keys</h2>
      <ul>
        {students.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <hr/>

      {/* 12 To-Do App */}
      <h2>To-Do App</h2>

      <input 
        type="text"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={()=>deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;