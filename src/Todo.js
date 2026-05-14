// import logo from './logo.svg';
// import './App.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";



// function App() {
//     const [data, setData] = useState([]); // ✅ define state
//    useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);
//   return (
//      <div>
//       <h2>Posts</h2>
//       {data.slice(0, 5).map((item) => (
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </div>
//   );
// }

// // function App() {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     axios.get("https://jsonplaceholder.typicode.com/posts")
// //       .then((response) => {
// //         setData(response.data);
// //       })
// //       .catch((error) => {
// //         console.error("Error:", error);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Posts</h2>
// //       {data.slice(0, 5).map((item) => (
// //         <p key={item.id}>{item.title}</p>
// //       ))}
// //     </div>
// //   );
// // }

// // export default App;
// export default App;
import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
<div style={{ backgroundColor: "blue", height: "10vh" }}>
     <h1>Todo App</h1>
</div>
<div style={{ backgroundColor: "lightblue", height: "100vh" }}>
     
   
     
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
     </div>
  );
}

export default Todo;
