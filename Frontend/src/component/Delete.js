import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { baseURL } from '../utils/Constans';

function Delete({id,setupdateui}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const deletestudent = () => {
        axios.delete(`${baseURL}/delete/${id}`).then(() => {console.log("Delete item successfully")})
        setupdateui((prevState)=>!prevState)
    }

    return (
        <div>
            <>
                <Button variant="danger" onClick={handleShow}>
                    Delete
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Oh !</Alert.Heading>
                        <p>

                            "Are you sure you want to delete this item? This action cannot be undone."
                        </p>
                    </Alert>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={() => { handleClose(); deletestudent()}}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default Delete