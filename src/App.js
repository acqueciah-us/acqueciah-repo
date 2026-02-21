import { useState } from "react";
function App() {
  const a = 5;
  let message;
  
  const [count, setCount] = useState(0);

  const students = ["Anne", "Bob", "Charlie"];
  const [task,setTask] = useState([]); // Store Task
  const[input,setInput] = useState(""); //Store Input Value

  return (
    <>
    
    if(isLoggedIn){
      message = "Welcome Back"
    }
    <p>{message}</p>
    else
    {
      message = "Please Log In."
    }
      <p>{message}</p>
      <>
      <h1>Hello React</h1>
      <p>a is equal to {a}</p>

      <h2>{a > 5 ? "welcome" : "Please Log In."}</h2>
      <p>Count: {count}</p>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick = {() => setCount(0)}>Reset</button>
      
      <p>{message}</p>

      </>
    
    </>
  )
}
export default App;