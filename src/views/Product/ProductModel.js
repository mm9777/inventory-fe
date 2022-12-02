import Modal from 'react-bootstrap/Modal'
import React from 'react'
import { useState } from 'react'
import AddProduct from './AddProduct'
 
 


const ProductModel = () => {
    const [user,setUser] = useState(false)
  return (
     <>
     <b>

     <button className='btn1' onClick={() => setUser(true)}>AddProduct</button>
     </b>
          <Modal 
        size="lg"
       show={user}
      onHide={() => setUser(false)}
     aria-labelledby="example-modal-sizes-title-lg" 
      >
        <Modal.Header closeButton> 
          <Modal.Title id="example-modal-sizes-title-lg">
            AddProduct
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
              
              {<AddProduct/>}
        </Modal.Body>
      </Modal>
      
     </>
  )
}

export default ProductModel;
