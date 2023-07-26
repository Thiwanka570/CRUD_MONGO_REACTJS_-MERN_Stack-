import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import { baseURL } from '../utils/Constans';

function Update({ student_name, student_phonenumber, student_email, id, setupdateui }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const name = student_name
    const pnumber = student_phonenumber
    const email = student_email

    const [updatename, setupdatename] = useState();
    const [updatepnumber, setupdatepnumber] = useState();
    const [updateemail, setupdateemail] = useState();
    

    // useEffect(()=>{
    //     getstdata();
    // })


    const getstdata = () => {
        axios.put(`${baseURL}/update/${id}`, { stname: updatename, phonenumber: updatepnumber, email: updateemail }).then((res) => {
            console.log("Data Update Successflly " + updatename)
            setupdateui((prevState) => !prevState)
        })
    }

    return (
        <div>
            <>
                <Button variant="primary" onClick={handleShow}>
                    Edit
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control className='mt-2' type="text" placeholder="Student Name" defaultValue={name} onChange={(e) => { setupdatename(e.target.value) }} required/>
                        <Form.Control className='mt-2' type="text" placeholder="Phone Number" defaultValue={pnumber} onChange={(e) => { setupdatepnumber(e.target.value) }} required/>
                        <Form.Control className='mt-2' type="text" placeholder="Email" defaultValue={email} onChange={(e) => { setupdateemail(e.target.value) }} required/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => { handleClose(); getstdata() }}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default Update