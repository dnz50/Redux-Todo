import { useDispatch } from "react-redux";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
import { useEffect } from "react";
import axios from 'axios'
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    axios.get('http://localhost:3004/todos')
    .then((res)=>dispatch({
      type:"SET_TODOS",
      payload: res.data

    }));
  })
  return (
    <div className="App">
      <h1 className="text-light d-flex justify-content-center m-4">Todo List</h1>
      <AddForm/>
      <ListTodos/>
      <ToastContainer/>
    </div>
  );
}

export default App;
