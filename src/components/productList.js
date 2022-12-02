import React from 'react'
import { useEffect } from 'react'
import Spinner from './spinner'
import { useState } from 'react'
import { Pagination, Table } from 'reactstrap'
import Model from 'src/views/Model/Model'
import ProductModel from 'src/views/Product/ProductModel'
 
// import React from 'react';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
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

export default function ProductList() {
  const [data1, setData1] = useState([])
  const [prod, setProd] = useState([])

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
    console.log(data.Product[0].product)
    setData1(data.Product)
    setProd(data.Product[0].product)
  }
  console.log(data1)
  $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable(
        {
            pagingType: 'full_numbers',
              pageLength: 10,
              processing: true,
              dom: 'Bfrtip',
                  button : ['copy', 'csv', 'print','pdf'
                  ]
        }
    );
    } ,
    1000
    );
});


  return (
    <>
      
      {/* {data1.length ? ( */}
      <div className="back-ground">
      <h3 >Stock Product</h3>
      <ProductModel />
      <Table striped id="example" class="display nowrap" style={{ width: '100%' }}>
      
        <thead>
          <tr>
            <th>S.No</th>
            {/* <th>_id</th> */}
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((val, i) => {
            let date = val?.updated_on?.split('T')[0]
            return (
              <>
                <tr>
                  <td>{i + 1}</td>
                  <td>
                    {val.product.map((d) => (
                      <p style={{ margin: 0, padding: 0 }}>{d}{" "} </p>
                    ))}
                  </td>
                  <td>
                    {val.price.map((d) => (
                      <p style={{ margin: 0, padding: 0 }}>{d} <span>{" Rs"}</span>  </p>
                    ))}
                  </td>
                  <td>
                  {val.quantity.map((d) => (
                      <p style={{ margin: 0, padding: 0 }}>{d} <span>{ val.unit}</span>  </p>
                    ))}
                  </td>

                  
                  <td>{date}</td>
                  <td>{<Model data={val} idx={i + 1} />}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </Table>
      <Spinner />
      </div>
    
      {/* <AdvancedExample/> */}
{/*       
    {
      $(document).ready(function() {
    $('#example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
} )
     
    } */}
    </>
  )
}
