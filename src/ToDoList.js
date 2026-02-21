import { useState } from "react";
import './css/ToDoList.css';
function ToDoList()
{ 
    const [tasks, setTask] = useState ([]);
    const [input, setInput] = useState ("");

    const addTask = () => {
        if(input.trim() === "") return;
        setTask([...tasks, { text: input, completed: false}]);
        setInput("");
        
    };

    const toggleTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTask(updatedTasks);
    };
    const deleteTask = (index) => {
    setTask(tasks.filter ((_, i) => i !== index));
    }
    return(
        <>
        {/* Title at the top */}
        <h1 className="todo-title"> MY TO-DO LIST</h1>
        <div className="App-link">
            <input
               type="text"
               value={input}
               placeholder="Enter a Task"
               onChange={(e) => setInput(e.target.value)} 

            />
            <button onClick={addTask}>Add</button>
        </div>
        <ul>
            {tasks.map((task, index) => 
            <li
                key={index}
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                }}
                >
                 <span onClick={() => toggleTask(index)}>{task.text}</span>
                 <button onClick={() => deleteTask(index)}>❌</button>
            </li>
            )}
        </ul>

        </>
    );

}
export default ToDoList;