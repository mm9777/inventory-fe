import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Dashboard = () =>{
    const [quantity, setQuantity] = useState('')
    const [category, setCategory] = useState('')
    const [bill, setBill] = useState('')
    const [sellerAmount,setSellerAmount] = useState('')
    const [profit, setProfit] = useState('')

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
        setCategory(data.totalAmount)
        setSellerAmount(data.sellerAmount)
        setProfit(data.sellerAmount-data.totalAmount)

        console.log( data)
    }
    

    return(
    <div >
<div className="dashboard">
   <div className="row">
    <div className= "col-md-3">
    <div  className="child">
    <h4 className="category">Product Purchesed</h4>
    <h3 className="category">{quantity}</h3>
  </div>
    </div>
   </div>
   
  <div  className="child1">
  <h4 className="category">No of Product Sale</h4>
  <h3 className="category">{bill}</h3>
 
  </div>
  <div  className="child2" >
  <h4 className="category">Total Investment</h4>
  <h3 className="category">{category}</h3>

  </div>
  <div  className="child3">
  <h4 className="category">Total SaleAmount </h4>
  <h3 className="category">{sellerAmount}</h3>

  </div>
  <div  className="child4">
  <h4 className="category">Profit </h4>
  <h3 className="category">{profit}</h3>

  </div>


</div>
</div>

         

    )
}
export default Dashboard;