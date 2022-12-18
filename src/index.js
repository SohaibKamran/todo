import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const DATA = [
  { id: "todo-0", name: "Create frontend app in React", completed: true },
  { id: "todo-1", name: "Create Server in Nodejs using Express framework", completed: true },
  { id: "todo-2", name: "Attach MongoDB to Express Server", completed: true }
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
