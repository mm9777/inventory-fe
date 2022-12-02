 import React from 'react'
 import { useState } from 'react';
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal';
import { Table } from 'reactstrap'
import Invoice from './invoice';
//  import BillModel from '../Bill/ViewBill'
 
 const BillModel = ({data,idx}) => {
    const [smShow1, setSmShow1] = useState(false);
    const [lgShow, setLgShow] = useState(false);
   return (
     <div>
     <a href='https://infolanetechnologies.com/module/data/invoice/order_pdf.php?invoice=19' target='blank'>

           <Badge bg="dark" onClick={() => setSmShow1(true)}>invoice</Badge>
     </a>
           {/* <Modal
        size="lg"
        show={smShow1}
        onHide={() => setSmShow1(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        
   
      
       {/* {<Invoice resu = {data}/>}          */}
      {/* </Modal> */} 

     </div>
   )
 }
 
 export default BillModel