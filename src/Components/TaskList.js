import React, { useState } from "react";
import { Table } from 'reactstrap';
import MyVerticallyCenteredModal from "./UpdateTask";
// import Table from 'react-bootstrap/Table';
import {  useSelector,useDispatch } from "react-redux";
import { setSelectedTask,removeTaskFromList } from "../slices/taskSlice";
const TaskList = () =>{
  const dispatch = useDispatch();
  const {taskList} = useSelector((state) =>(state.tasks))

    const [modalShow,setModalShow] = useState(false);
 console.log(taskList,'taskList');
    const updateTask =(task) =>{
        setModalShow(true);
     console.log('update task',modalShow);
     dispatch(setSelectedTask(task));

    }

    const deleteTask = (task) => {
      dispatch(removeTaskFromList(task));

        console.log('delete task');

    }

    return(
      
<>
<Table striped bordered hover>
      <thead>
        <tr className="text-center">
          <th>#</th>
          <th>Task</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          
          taskList && taskList.map((task,index) =>{
            return(
            <tr className="text-center" key={task.id}>
            <td>{index + 1}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>
              <button type="button" 
              className="mx-3 btn btn-success"
              onClick={() => updateTask(task)}
               ><i className="bi bi-pencil"></i>
              </button>
              <button type="button" class="btn btn-danger"
               onClick={() => deleteTask(task)}
              ><i className="bi bi-trash"></i>
              </button>
            </td>
          </tr> 
            )
          })
        }
       
      </tbody>
    </Table>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
    );
}

export default TaskList;