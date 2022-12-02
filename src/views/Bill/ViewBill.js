import React from 'react'
import { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import Spinner from '../../components/spinner'
import BillModal1 from './BillModal1'
 
import BillModel from './BillModel'
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
// import Invoice from './invoice'
const ViewBill = () => {
  const [data1, setData1] = useState([{}])
  const [category, setCategory] = useState('')
  const [bill, setBill] = useState('')

  useEffect(() => {
    getProductBill()
  }, [])

  async function getProductBill() {
    let res = await fetch('http://localhost:5000/getBill', {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    // setBill(data.bill.length)
    setData1(data)

}
console.log(data1)
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
    <>
    <div className="back-ground"> 
    <h3>ViewBill</h3>
    <BillModal1/>
       
      <Table striped id="example" className="display nowrap" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>s.no</th>
          {/* <th>Bill_id</th> */}
          <th>Customer Name</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Discount</th>
          <th>Payment</th>
          <th>Contact No</th>
          <th>Date</th>
          <th>Action</th>
          
        </tr>
        </thead>
        <tbody>
        {data1?.map((val, i) => {
          return (
            <>
              <tr>
                <td>{i+1}</td>
                <td>{val.billing_to}</td>
                <td>{val.product?.map((d) => (
                      <p style={{ margin: 0, padding: 0 }}>{d}{" "} </p>
                    ))}</td>
                <td>{val.quantity?.map((d) => (
                      <p style={{ margin: 0, padding: 0 }}>{d}{" "}<span>{val.unit} </span> </p>
                    ))}</td>
                    <td>{val.discount?.map((d) => (
                      <p style={{ margin: 0, padding: 0 }}>{d}{" % "} </p>
                    ))}</td>
                <td>{val.payment}</td>
                <td>{val.mobile_No}</td>
                <td>{val.updated_on?.split('T')[0]}</td>
                <td>
                 {<BillModel data={val} idx={i+1}/>}
                 {/* {<Invoice  data = {val}/>}  */}
                
                </td>
                
              </tr>
            </>
          )
        })}
        </tbody>
      </Table>
       
        <Spinner />
         
      
        </div>
    </>
  )
}

export default ViewBill
