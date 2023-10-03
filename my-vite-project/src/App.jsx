/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


// http://localhost:5173/



*/



import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [randomName, setRandomName] = useState('');

  const getRandomName = async () => {
    try {
      
      const response = await axios.get('http://localhost:5004/api/random-name');

      //const response = await axios.get('/api/random-name');
      setRandomName(response.data.name);
    } catch (error) {
      console.error('Error fetching random name:', error);
    }
  };

//const response = await axios.get('http://localhost:5004/api/random-name');


  return (
    <div className="App">
      <h1>Random Name Generator</h1>
      <button onClick={getRandomName}>Get Random Name</button>
      <p>{randomName}</p>
    </div>
  );
}

export default App;












