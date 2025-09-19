import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { remove } from "../Redux/CartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);
  const handleremove =(id)=>{
    dispatch(remove(id))
  }

   if (cartitems.length === 0) {
    return <h3 className="text-center my-5">Your Cart is Empty</h3>;
  }

  return (
    
    <div className="container my-5">
      <h3 className="mb-4">Cart Page</h3>
      <div className="row">
        {cartitems.map((item) => (
          <div className="cartCard col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow-sm">              
              <img src={item.image} alt="img" className="card-img-top p-3" />            
              <h5>{item.title}</h5>
              <h5>{item.price}</h5>
            <button className="btn btn-danger mt-auto" onClick={()=>handleremove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
