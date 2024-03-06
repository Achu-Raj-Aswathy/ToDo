import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { deleteTodo, getAllTodos, getTodoDetailsById, updateTodoByID } from '../services/allAPI'

function Listtodo({ uploadTodoStatus }) {


    const [eachTaskValue, setEachTaskValue] = useState({
        todoName: "",
        todoDescription: ""
    })


    const [allTodo, setAllTodo] = useState([])
    const getAllTodoItem = async () => {
        const response = await getAllTodos();
        const { data } = response;
        setAllTodo(data);
    }
    useEffect(() => {
        getAllTodoItem()
    }, [uploadTodoStatus])
    // console.log("All todo items");
    // console.log(allTodo);
    const removeToDo = async (id) => {
        const response = await deleteTodo(id);
        alert("Successfully deleted the ToDo item");
        getAllTodoItem();

    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getTodoDetails = async (id) => {
        handleShow();
        const res = await getTodoDetailsById(id)
        const { data } = res;
        // console.log("=each task details");
        // console.log(data);
        setEachTaskValue(data)
    }

    const updateTodo = async () => {
        handleClose();
        await updateTodoByID(eachTaskValue.id, eachTaskValue)
        alert("Task updated successfully")
        getAllTodoItem();


    }
    return (
        <>

            <div className='mt-5'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {
                        allTodo?.length > 0 ?
                            allTodo.map((item, index) => (




                                <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.todoName} </td>
                                        <td>{item.todoDescription}</td>
                                        <td >
                                            <Button onClick={() => getTodoDetails(item.id)}>
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </Button>
                                            <Button className='ms-3' onClick={() => removeToDo(item.id)}>
                                                <i class="fa-solid fa-trash"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>

                            )) :
                            <p>No ToDo Items</p>
                    }
                </table>
            </div>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='mt-3'>
                        <input type="text" className='form-control border-primary' value={eachTaskValue.todoName}
                            onChange={(e) => setEachTaskValue({ ...eachTaskValue, todoName: e.target.value })} />
                    </div>
                    <div className='mt-3'>
                        <textarea className='form-control border-primary' id="w3review" name="w3review" rows="3" cols="30" value={eachTaskValue.todoDescription}
                            onChange={(e) => setEachTaskValue({ ...eachTaskValue, todoDescription: e.target.value })} >
                        </textarea>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateTodo}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Listtodo