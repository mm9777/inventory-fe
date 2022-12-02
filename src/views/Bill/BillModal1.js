import Modal from 'react-bootstrap/Modal'
import React from 'react'
import { useState } from 'react'
import Billing from './Billing'


function BillModal1() {
    const [text,setText] = useState('')

  return (
    <>
    <button className='btn1' onClick={() => setText(true)}>AddBill</button>
         <Modal 
       size="lg"
      show={text}
     onHide={() => setText(false)}
    aria-labelledby="example-modal-sizes-title-lg" 
     >
       <Modal.Header closeButton> 
         <Modal.Title id="example-modal-sizes-title-lg">
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>
             
             {<Billing/>}
       </Modal.Body>
     </Modal>
     
    </>
  )
}

export default BillModal1