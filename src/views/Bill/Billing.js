import React, {useState} from "react";
import Swal from "sweetalert2";
const Billing = ()=>{
    const [user, setUser] = useState({
        product: [],  quantity: [], discount: [], payment: "", billing_to: "",
    });
    let name, value;
    const handleInputs = (e) =>{
        // console.log(e);
        name = e.target.name;
        value = e.target.value;
        if (name=='product'||name=='quantity'||name=='discount') {
            // user.name.push(value)   
            if (value.includes(',')) {
                setUser({...user, [name]:value.split(',')}); 
            }
            else{
                setUser({...user, [name]:[value]}); 
            }
         
        }
        else{

            setUser({...user, [name]:value}); 
        }
    }
    const PostData = async(e) =>{
        e.preventDefault();
        const {product,quantity, discount, payment, billing_to, mobile_No}= user;
        console.log(user)
        const res = await fetch("http://localhost:5000/Product",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                product,quantity, discount, payment, billing_to, mobile_No
            })
        });
        const data = await res.json();
        // console.log(data)
        if(!data){
            Swal.fire("invailid Data");
        }
        else{
            Swal.fire("Billing Successful");
        }
    }
     return(
        <div > 
        <h5>Bill</h5>
    <div className="row">
    <div className="col-md-6">
            <b>
                <label className="addProduct">Customer Name</label><br></br>
                <input type="text" name="billing_to" placeholder="Billing_to" className="product" onChange={handleInputs} value= {user.billing_to} />
            </b>
            </div>
        <div className="col-md-6">
        <div className="addProduct">
        
        <b>
                <label >Product</label><br></br>
                <input type="text" name="product" placeholder='Product Name' className='product'  value={user.product} onChange={handleInputs}/>
            </b>
            </div>
        </div>
        <div className="col-md-6">
            <b>
            
                <label className="addProduct">Quantity</label><br></br>
                <input type="text" name="quantity" placeholder="Quantity" className="product" onChange={handleInputs} value={user.quantity} />
            </b>
            </div>
            <div className="col-md-6">
            <b>
            
                <label className="addProduct">Discount</label><br></br>
                <input type="text" name="discount" placeholder="Discount" className="product" onChange={handleInputs} value={user.discount} />
            </b>
             </div>
             <div className="col-md-6"> 
            <b>
            
                <label className="addProduct">Payment</label><br></br>
                <input type="text" name="payment" placeholder="Payment" className="product" onChange={handleInputs} value= {user.payment} />
            </b>
            </div>
            <div className="col-md-6">
            <b>
                <label className="addProduct">Contact No</label><br></br>
                <input type="Number" name="mobile_No" placeholder="Contact No" className="product" onChange={handleInputs} value= {user.mobile_No} />
            </b> 
        
             </div>
            
            

    </div>
        <button className="Add" onClick={PostData}>Add</button>
      
        </div> 
     )
  
}
export default Billing;