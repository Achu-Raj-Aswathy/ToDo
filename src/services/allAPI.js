
import { commonAPI } from "./commonAPI";

//1. upload todo items

const serverURL ='https://todo-server-eyw4.onrender.com'
export const uploadTodo = async (reqBody) => {
   return await commonAPI ('POST',`${serverURL}/todolist`, reqBody)
}

// 2. get all todo items

export const getAllTodos = async() =>{
   return await commonAPI('GET',`${serverURL}/todolist`,"")
}

// 3. Delete todo item

export const deleteTodo = async(id)=>{
   return await commonAPI(`DELETE`,`${serverURL}/todolist/${id}`,{})
}

// 4.to get details of a specific task by its id
export const getTodoDetailsById = async (id)=>{
    return await commonAPI('GET',`${serverURL}/todolist/${id}`,"")
} 

// 5. 
export const updateTodoByID = async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}/todolist/${id}`,body)

}