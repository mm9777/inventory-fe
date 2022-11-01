import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Dashboard = () =>{
    const [quantity, setQuantity] = useState('')
    const [category, setCategory] = useState('')
    const [bill, setBill] = useState('')

    useEffect(() => {
    getProduct()
      
    }, [])

    async function getProduct(){
        let res =await fetch("http://localhost:5000/getDetails",{
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            }
        })
        // .then((r)=>console.log(r))
        const data = await res.json();
        setBill(data.bill.length)
        setQuantity(data.product.length)

        console.log( data)
    }
    

    return(
    <div >
<div className="dashboard">
   <div className="row">
    <div className= "col-md-3">
    <div  className="child">
    <h2 className="category">Total Product </h2>
    <h3 className="category">{quantity}</h3>
  </div>
    </div>
   </div>
   
  <div  className="child">
  <h2 className="category">Total Bill</h2>
  <h3 className="category">{bill}</h3>

  </div>


</div>
</div>

         

    )
}
export default Dashboard;