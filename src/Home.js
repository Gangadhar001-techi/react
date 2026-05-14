import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";



function App() {
    const [data, setData] = useState([]); // ✅ define state
   useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
     <div>
      <h2>Posts</h2>
      {data.slice(0, 5).map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Posts</h2>
//       {data.slice(0, 5).map((item) => (
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </div>
//   );
// }

// export default App;
export default App;