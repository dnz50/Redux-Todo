import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

function Todos({ todo }) {
  const dispatch = useDispatch();
  const handleDelete = () => {

    
    //db.json dan silme
    axios.delete(`http://localhost:3004/todos/${todo.id}`)
      .then(() => {

        dispatch({ // store u güncelle
          type: "DELL_TODO",
          payload: todo.id
        });
        toast.error('ToDo Deleded', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      })

  }
  const handleEdit = () => {
    const updatedTodo = { ...todo, isDone: !todo.isDone }//isdone todonun isdone değerinin tam tersi olsun
    axios.put(`http://localhost:3004/todos/${todo.id}`, updatedTodo)
      .then(() => {
        dispatch({
          type: "EDIT_TODO",
          payload: todo.id
        });
        todo.isDone ? (toast.error("Todo Not Completed", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })) : (toast.success("Todo Completed", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }))
        
          return
      })

  }

  return (
    <div className="card m-3 shadow" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title" style={{textDecoration:todo.isDone ? "line-through" : "none"}}>{todo.text}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{todo.isDone ? 'Completed' : 'Continues'}</h6>
        <p className="card-text">{new Date(todo.date).toLocaleString()}</p>
        <button className={todo.isDone ? "btn btn-success" : "btn btn-outline-success"} onClick={handleEdit}>
          {todo.isDone ? "Back" : "Done"}</button>
        <button className="btn btn-outline-danger m-3" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Todos