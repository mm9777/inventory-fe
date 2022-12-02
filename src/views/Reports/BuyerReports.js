 import React, { useEffect } from 'react';
 import Modal from 'react-bootstrap/Modal';
 import { useState } from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
 
 
 const BuyerReports = () => {
  const [data1, setData1] = useState([])
  const [lgShow, setLgShow] = useState(false);
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  // useEffect(()=>{
  //   getProductUpdate()
  // },[])
  async function getProductUpdate(){
    const date1 = new Date(startDate)
    const date2 = date1.toISOString()
    const date3 = new Date(endDate)
    const date4 = date3.toISOString()
    let result =await fetch(`http://localhost:5000/getDate?startDate=${date2}&endDate=${date4}`,{
      method:'Get',
      headers: { 
        'Content-Type': 'application/json',
      }

    })
    const data = await result.json()
    setLgShow(true)
    setData1(data)
  }
  
  console.log(startDate,endDate)
  $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable(
        {
            pagingType: 'full_numbers',
              pageLength: 15,
              processing: true,
              dom: 'Bfrtip',
                  button : ['copy', 'csv', 'print'
                  ]
        }
    );
    } ,
    1000
    );
  });

   return (
     <div>
     <h2>BuyerReports</h2><br></br>
     <b>
      <label  >from</label>

     </b>
      <input type="Date" className='Reports' value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
      <b>

      <label className='Report'>To</label>
      </b>
      <input type="Date" className='Reports' value={endDate}  onChange={(e)=>setEndDate(e.target.value)}/><br></br>
      <button className='Summitbutton' onClick={ getProductUpdate}>Summit</button>
      <Modal 
        size="lg"
       show={lgShow}
      onHide={() => setLgShow(false)}
     aria-labelledby="example-modal-sizes-title-lg" 
      >
        <Modal.Header closeButton> 
          <Modal.Title id="example-modal-sizes-title-lg">
            Buyer Reports
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
        <Table striped id="example" className="display nowrap" style={{ width: '100%' }}>
        <thead>
        <tr>
          <th>S.No</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Unit</th>
          <th>MyPrice</th>
          <th>updated_on</th>

          
        </tr>
        </thead>
        <tbody>
        {data1.map((val, i) => {
          return(
        <tr>
          <th>{i+1}</th>
          <td>{val.product?.map((d) => (
                      <p style={{ margin: 0, padding: 0 }}>{d}{" ,"} </p>
                    ))}</td>
          <td>{val.price?.map((d) => (
                      <p style={{ margin: 0, padding: 0 }}>{d}{" ,"} </p>
                    ))}</td>
          <td>{val.quantity?.map((d) => (
                      <p style={{ margin: 0, padding: 0 }}>{d}{" ,"} </p>
                    ))}</td>
          <th>{val?.unit}</th>
          <td>{val.myprice?.map((d) => (
                      <p style={{ margin: 0, padding: 0 }}>{d}{" ,"} </p>
                    ))}</td>
           
          <th>{val?.updated_on?.split("T")[0]}</th>

          
        </tr>
          )})}
        </tbody>
        
       </Table>   
           
        </Modal.Body>
      </Modal>

      
     </div>
   )
 }
 
 export default BuyerReports
