import React, { useState } from "react";
import { addTaskToList } from "../slices/taskSlice";
import { useDispatch } from "react-redux";

const AddTask = () => {

    const dispatch = useDispatch()
    
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const addTask =(e) =>{
        e.preventDefault()
        console.log({title,description});
        dispatch(addTaskToList({title,description}));
        setTitle('');
        setDescription('');
       }
   
    
    return (
        <div className="my-5">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Task Title</label>
                    <input 
                     type="text"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     class="form-control"
                     aria-describedby="emailHelp"
                     placeholder="Enter Task Title" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Task Description</label>
                    <input 
                    type="text" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    class="form-control" 
                    placeholder="Enter Description" />
                </div>
                <div className="text-end">
                <button type="submit"
                onClick={(e) => addTask(e)}
                 className="btn btn-info text-white">Add Task</button>

                </div>
            </form>
        </div>
    )
};

export default AddTask;