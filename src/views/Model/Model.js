import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'reactstrap'
import Badge from 'react-bootstrap/Badge'
import UpdateProduct from '../Product/UpdateProduct';

function Model() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  

  return (
    <>
      {/* <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button> */}
      {/* <Button id="1054"   onClick={() => setLgShow(true)}>View</Button> */}
      {/* <Button variant="success" onClick={() => setLgShow(true)}>View</Button>{' '} */}
      <Badge bg="dark" onClick={() => setLgShow(true)}>View</Badge>
    
      <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>


      {/* <Button href="#" onClick={() => setLgShow(true)}>Link</Button> */}
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
  <Modal.Header > 
            <Modal.Title id="example-modal-sizes-title-sm">
             Small Modal
       </Modal.Title>  
          </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
      <Modal 
        size="lg"
       show={lgShow}
      onHide={() => setLgShow(false)}
     aria-labelledby="example-modal-sizes-title-lg" 
      >
        <Modal.Header closeButton> 
          <Modal.Title id="example-modal-sizes-title-lg">
            ViewProduct
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped>
      <thead>
        <tr>
          <th>S.No</th>
          <th>_id</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Unit</th>
          <th>MyPrice</th>
          <th>MyUnit</th>
          <th>updated_on</th>
          
          
        </tr>
        </thead>
        </Table>
        </Modal.Body>
      </Modal>
      
    </>
  );
}
export default Model