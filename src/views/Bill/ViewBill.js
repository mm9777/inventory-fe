import React from 'react'
import { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import Badge from 'react-bootstrap/Badge'
const ViewBill = () => {
  const [data1, setData1] = useState([{}])
  const [category, setCategory] = useState('')
  const [bill, setBill] = useState('')

  useEffect(() => {
    getProductBill()
  }, [])

  async function getProductBill() {
    let res = await fetch('https://inventorymanagmentbe.herokuapp.com/getBill', {
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

  return (
    <>
    
      <Table striped>
      <thead>
        <tr>
          <th>s.no</th>
          {/* <th>Bill_id</th> */}
          <th>Customer Name</th>
          <th>Payment</th>
          <th>Contact No</th>
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
                <td>{val.billing_to}</td>
                <td>{val.payment}</td>
                <td>{val.mobile_No}</td>
                <td>
                <Badge bg="dark" onClick={() => setLgShow(true)}>View</Badge>
                
                </td>
                
              </tr>
            </>
          )
        })}
        </tbody>
      </Table>
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

export default ViewBill
