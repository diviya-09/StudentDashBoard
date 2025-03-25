import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [name, setName] = useState("");
  const [darkMode,setDarkMode] = useState(false);
  return (
  <center>
  <div className={darkMode?"container dark":"container"}> 
  <h1>Welcome to Student Dashboard</h1>
  <input type="text" 
  placeholder="Enter you name" 
  className="name-input"
  value={name}
  onChange={(e)=> setName(e.target.value)}
  />
  <p>Hello, {name}</p>
  <button className="toggle-btn" 
  onClick={()=>setDarkMode(!darkMode)}>
    {darkMode ? "Switch to light Mode" : "  Switch to Dark Mode"}
  </button>
  </div>
  </center>
);
}

export default App;