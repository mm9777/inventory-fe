// import Model from './views/Model/Model'
import { cibTableau } from '@coreui/icons'
import React from 'react'
import { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import Tables from '../base/tables/Tables'
import Model from '../Model/Model'
import AdvancedExample from '../Product/pagination'
const ViewProduct = () => {
  const [data1, setData1] = useState([{}])
  const [category, setCategory] = useState(false);
  const [bill, setBill] = useState('')

  useEffect(() => {
    getProductDetail()
  }, [])

  async function getProductDetail() {
    let res = await fetch('http://localhost:5000/getProduct', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    // setBill(data.bill.length)
    setData1(data.Product)

}
console.log(data1)

  return (
      
    <>
    {/* <div id="example_filter" class="dataTables_filter"><label>Search:
    <input type="search" class="" placeholder="" aria-controls="example"/>
    </label>
    </div> */}
    
 

      <Table striped>
      <thead>
        <tr>
          <th>S.No</th>
          {/* <th>_id</th> */}
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Unit</th>
          <th>Action</th>
          
        </tr>
        </thead>
        <tbody>
        {data1.map((val, i) => {
          return (
            <>
              <tr>
                <td>{i+1}</td>
                {/* <td>{val._id}</td> */}
                <td>{val.product}</td>
                <td>{val.price}</td>
                <td>{val.quantity}</td>
                <td>{val.unit}</td>
                <td>
                {/* <button id="1054" class="btn btn-warning btndan" onClick={()=>{
                  setCategory(true)
                }} >VIEW 
                </button> */}
                
                { <Model/>}
                </td>
            
                
              </tr>
              
            </>
          )
        })}
        </tbody>
      </Table>
                  {<AdvancedExample/>}
      {/* <div className='view'>
        <h5>S.No.</h5>
        <h5 className='id'>_id</h5>
        <h5 className='viewProducts'>product</h5>
        <h5 className='viewProduct'>price</h5>
        <h5 className='viewProduct'>quantity</h5>
        <h5 className='viewProduct'>unit</h5>
        <h5 className='viewProduct'>myprice</h5>
        <h5 className='viewProduct'>myunit</h5>
        <h5 className='viewProduct'>updated_on</h5>
        </div> */}
    </>
  )
}

export default ViewProduct
