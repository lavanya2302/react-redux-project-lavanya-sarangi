import React, {useState,useEffect} from 'react'
import { add } from '../Redux/CartSlice'
import { useDispatch } from 'react-redux'

function Home() {
  const[products,setproduct]=useState([])
  const dispatch =useDispatch();
  
  useEffect(()=>{
    const fetchproduct =async()=>{
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setproduct(data);
    }
    fetchproduct();
  },[])


   const handleadd =(product)=>{
      dispatch(add(product));
   }

  return (
    <div className="container my-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top p-3"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{product.title}</h6>
                <h5 className="text-success">${product.price}</h5>
                <button className="btn btn-primary mt-auto" onClick={()=>handleadd(product)} >Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;