import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todos from './Todos'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";



const ListTodos = () => {
  const dispatch = useDispatch();
  const handleClear =()=>{
    dispatch({
      type:'CLEAR'
    });
    toast.error('All ToDos Deleded', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };
  //store içindeki verilere abone olma işlemi yapıyoruz
  const {todoState}=useSelector((state)=>state)
  console.log(todoState);
  return (
    <div className="row justify-content-center mx-4">
      <div>
        {todoState.todos.length >0 ?(
          <button className='btn btn-danger'onClick={handleClear}>Clear All</button>
        ) : "Please Add Todo"}
      </div>
      {todoState.todos.map((todo)=>(
      <Todos todo={todo} key={todo.id}/> ))}
    </div>
  )
}

export default ListTodos