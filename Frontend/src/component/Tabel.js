
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import Update from './Update';
import Delete from './Delete';



function Tabel({ stdata, setupdateui }) {

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Phone Number</th>
                        <th>E mail</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stdata.map((student) => (

                            <tr>
                                <td>{student.stname}</td>
                                <td>{student.phonenumber}</td>
                                <td>{student.email}</td>
                                <td><Update student_name={student.stname} student_phonenumber={student.phonenumber} student_email={student.email} id={student._id} setupdateui={setupdateui} /></td>
                                <td><Delete id={student._id} setupdateui={setupdateui} /></td>
                            </tr>

                    ))
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default Tabel