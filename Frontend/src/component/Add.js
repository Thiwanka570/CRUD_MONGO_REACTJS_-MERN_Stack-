
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { baseURL } from '../utils/Constans';
import 'bootstrap/dist/css/bootstrap.min.css'


function Add({setupdateui}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[name,setname]=useState()
    const[pnumber,setpnumber]=useState()
    const[email,setemail]=useState()

    const addstudent=()=>{
        axios.post(`${baseURL}/save`,{stname:name,phonenumber:pnumber,email:email}).then((res)=>{
            console.log(res.data);
            setname("");
            setpnumber("");
            setemail("");
            setupdateui((prevState)=> !prevState)
        })
    }

    return (
        <div className='ml-3'>
            <>
                <Button variant="primary" onClick={handleShow}>
                    Add Student
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control className='mt-2' type="text" placeholder="Student Name" onChange={(e)=>{setname(e.target.value)}} required/>
                        <Form.Control className='mt-2' type="text" placeholder="Phone Number" onChange={(e)=>{setpnumber(e.target.value)}} required/>
                        <Form.Control className='mt-2' type="text" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} required/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type='submit' variant="primary" onClick={()=>{handleClose();addstudent()}}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default Add