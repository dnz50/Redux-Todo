import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            toast.warn('Please Add a ToDo', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            return;
          }
        
        const newTodo = {
            id: new Date().getTime(),
            text,
            isDone: false,
            date: new Date()
        };
        //oluşan objeyi apiye gönderme
        axios.post('http://localhost:3004/todos',newTodo);
        dispatch({ type: "ADD_TODO", payload: newTodo }); //reducera gönderdik

        setText("");//inputa value eklemek gerekiyor

    };
    return (
        
        <form  onSubmit={handleSubmit} className='d-flex justify-content-center m-4 ' >
            
            <input className='form-control'
                value={text}
                type="text"
                placeholder='Add Todo'
                onChange={(e) => setText(e.target.value)} />
            <button className='btn btn-primary m-2'>Submit</button>
        </form>
    )
}

export default AddForm