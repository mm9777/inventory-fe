import React ,{useState} from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
const AddProduct = () => {
    const [user, setUser] = useState({
        product: "", price: "", quantity: "", unit: "", myprice: "", myunit: "",
    });
    let name, value;
    const handleInputs = (e) =>{
        // console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value}); 
    }
    const PostData = async(e) =>{
        e.preventDefault();
        const {product, price, quantity,unit, myprice, myunit}= user;
        console.log(user)
        const res = await fetch("http://localhost:5000/invetoryProduct",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                product,price,quantity, unit, myprice, myunit
            })
        });
        const data = await res.json();
        if(data.error){
            Swal.fire(
                'invailid Data'
                )
        
        }
        else{
            Swal.fire(
                'product Add Successful'
            )
        }
    }
    return (
    
        <div > 
            <h5>Add Product</h5>
        <div className="row">
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
                
                    <label className="addProduct">Price</label><br></br>
                    <input type="Number" name="price" placeholder="Price" className="product" onChange={handleInputs} value={user.price} />
                </b>
                </div>
                <div className="col-md-6">
                <b>
                
                    <label className="addProduct">Quantity</label><br></br>
                    <input type="Number" name="quantity" placeholder="Quantity" className="product" onChange={handleInputs} value={user.quantity} />
                </b>
                 </div>
                 <div className="col-md-6"> 
                <b>
                
                    <label className="addProduct">Unit</label><br></br>
                    <input type="text" name="unit" placeholder="Unit" className="product" onChange={handleInputs} value= {user.unit} />
                </b>
                </div>
                <div className="col-md-6">
                <b>
                    <label className="addProduct">MyPrice</label><br></br>
                    <input type="Number" name="myprice" placeholder="MyPrice" className="product" onChange={handleInputs} value= {user.myprice} />
                </b>
                </div>
                
                <div className="col-md-6">
                <b>
                    <label className="addProduct">MyUnit</label><br></br>
                    <input type="text" name="myunit" placeholder="MyUnit" className="product" onChange={handleInputs} value={user.myunit}/>
                </b>
                </div>
                

        </div>
            <button className="Add" onClick={PostData}>Add</button>
          
            </div> 
        
    
            

        
        

    )

}
export default AddProduct;