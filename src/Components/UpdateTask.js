import { Modal, ModalBody,ModalHeader,ModalFooter,Button, Label, Input } from "reactstrap";
// import Modal from 'react-bootstrap/Modal';

import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import { updateTaskInList } from "../slices/taskSlice";
import { useDispatch } from "react-redux";

const MyVerticallyCenteredModal = (props) => {

    const {selectedTask} = useSelector((state) => state.tasks)

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [id,setId] = useState(0);
    const dispatch =useDispatch();

    const updateTask =(e) =>{
        props.onHide();
        console.log({title,description});
        dispatch(updateTaskInList({id,title,description}));
       }

       useEffect(()=>{
        console.log(selectedTask,'seletedTask');
        if(Object.keys(selectedTask).length !== 0){
          setTitle(selectedTask.title);
          setDescription(selectedTask.description);
          setId(selectedTask.id)
        }
       },[selectedTask])
   
  return(
   <>
   
    <Modal
      isOpen={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader className="text-success" closeButton>
       Update Task
      </ModalHeader>
      <ModalBody>
      <form>
                <div class="mb-3">
                    <Label for="exampleInputEmail1" class="form-label">Task Title</Label>
                    <Input 
                     type="text"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     class="form-control"
                     aria-describedby="emailHelp"
                     placeholder="Enter Task Title" />
                </div>
                <div class="mb-3">
                    <Label for="exampleInputPassword1" class="form-label">Task Description</Label>
                    <Input 
                    type="text" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    class="form-control" 
                    placeholder="Enter Description" />
                </div>
            </form>
      </ModalBody>
      <ModalFooter className="text-end">
      <Button type="submit"
                onClick={(e) => updateTask(e)}
                 class="btn btn-info">Update Task</Button>
      </ModalFooter>
    </Modal>
   </>
  );
}

export default MyVerticallyCenteredModal;