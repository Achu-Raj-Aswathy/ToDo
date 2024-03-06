import React, { useState } from 'react'
import { uploadTodo } from '../services/allAPI';

function Addtodo({setUploadTodoStatus}) {
    const [todoValue,setTodoValue] = useState({
        todoName:"",
        todoDescription:""
    })
    console.log("=1=");
    console.log(todoValue);
    const handleAdd = async() => {
        const {todoName,todoDescription} = todoValue;
        if( !todoName || !todoDescription){
            alert("Please fill the form completely")

        }
        else{
            const response= await uploadTodo(todoValue);
            alert("Successfully inserted the Todo item")
            setUploadTodoStatus(response.data)
            setTodoValue({
                todoName:"",
                todoDescription:""
            })
            
        }
    }
    return (
        <>
            <div>
                <h3 className='text-center text-primary mt-5 mb-3'>ToDo APPLICATION</h3>
                <div className='mt-3'>
                    <input type="text" className='form-control border border-primary' placeholder='Enter the Task' value={todoValue.todoName}
                    onChange={(e) => setTodoValue({...todoValue, todoName:e.target.value})} />
                </div>
                <div className='mt-3'>
                    <textarea className='form-control border-primary' id="w3review" placeholder='Description' name="w3review" rows="3" cols="30" value={todoValue.todoDescription}
                    onChange={(e) => setTodoValue({...todoValue, todoDescription:e.target.value})} >
                    </textarea>
                </div>
                <button className='mt-3 btn w-100 btn-primary' onClick={handleAdd}>ADD TODO ITEM</button>
            </div>

        </>
    )
}

export default Addtodo