import Modal from 'react-bootstrap/Modal';
import React from 'react'
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
 
 const SellerReports = () => {
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
    let result =await fetch(`http://localhost:5000/getDate1?startDate=${date2}&endDate=${date4}`,{
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
     <h2>SellerReports</h2><br></br>
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
            SellerReports
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
        <Table striped id="example" className="display nowrap" style={{ width: '100%' }}>
        <thead>
        <tr>
          <th>S.N</th>
          <th>Name</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Discount</th>
          <th>Payment</th>
          <th>Contact</th>
          <th>Date</th>
          {/* <th>Action</th> */}

          
        </tr>
        </thead>
        <tbody>
        {data1.map((val, i) => {
          return(
        <tr>
          {/* <th>{idx}</th> */}
          <td>{i+1}</td>
                <td>{val.billing_to}</td>
                <td>{val.product}</td>
                <td>{val.quantity}</td>
                <td>{val.discount}</td>
                <td>{val.payment}</td>
                <td>{val.mobile_No}</td>
                <td>{val.updated_on?.split('T')[0]}</td>
                

          
        </tr>
          )})}
        </tbody>
        
       </Table>   
           
        </Modal.Body>
      </Modal>

      
     </div>
   )
 }
 
 
 export default SellerReports
 