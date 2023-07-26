
import React, { useEffect, useState } from 'react'
import Navibar from './component/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Tabel from './component/Tabel';
import Add from './component/Add';
import axios from "axios"
import { baseURL } from './utils/Constans';



function App() {

  const [studentData, setStudentData] = useState([]);
  const [updateui,setupdateui]=useState(false)


  useEffect(() => {
    fetchData();
  }, [updateui]);

  const fetchData = () => {
    axios.get(`${baseURL}/get`).then((res) => {
      setStudentData(res.data);
    });
  }



  return (
    <>
      <div className='container'>
      <div className='head mt-2'>
        <Navibar />
      </div>
      <div className='mt-3 mb-3 d-flex'>
        <Add setupdateui={setupdateui}/>
      </div>
      <div className='content mt-3'>
        <Tabel stdata={studentData} setupdateui={setupdateui}/> 
      </div>
    </div>
    </>
  );
}

export default App;
