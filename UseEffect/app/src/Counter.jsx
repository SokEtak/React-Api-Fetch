import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0); // State for count, initially set to 0
  const [name, setName] = useState(""); // State for name, initially an empty string
  
  const handleChange = (e) => {
    setName(() => e.target.value); // Updates the name state with input value
  };

  const increaseN = () => {
    setCount((c) => c + 1); // Increases the count by 1 when the button is clicked
  };

  // useEffect hook: Runs when the component is mounted or when 'count' changes.
  useEffect(function myEffect() {
    console.log("My effect is called"); // Logs a message whenever the 'count' changes
  }, [count]); // Dependency array: only re-run this effect when 'count' changes.

  return (
    <div>
      <h1>count is:{count}</h1>
      <button onClick={increaseN}>+1</button>
      <input onChange={handleChange} type="text" placeholder="Name" />
      <button>Submit</button>
    </div>
  );
}

export default Counter;
