import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
export default function App(props) {
  useEffect(() => {
    console.log("Use Effect", tasks);
  });
  const [tasks, setTasks] = useState(props.tasks);
  function addTask(name) {
    const newTask = { id: `todo-${tasks.length}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const taskList = tasks.map((task, index) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={index} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} editTask={editTask} />
  ));
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function editTask(id, newName) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }
  return (
    <div className="todoapp stack-large">
      <h1>To Do app</h1>
      <h2 className="label-wrapper">
        <label className="label__lg">This app is developed in MERN stack(MongoDB,Express,React,Node)</label>
      </h2>
      <Form addTask={addTask} />
      <h2 id="list-heading">{tasks.length} {tasks.length > 1 ? 'tasks' : 'task'} remaining</h2>
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}