import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Noproducts from '../assets/image.png'
import { Link } from 'react-router-dom';

function Home() {

      const [products, setProducts] = useState([]);

      useEffect(() => {
        axios
        .get('http://localhost:5000/api/products')
        .then(function (response) {
            setProducts(response.data.data);
            console.log(response.data.data);
            console.log(products.length);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
          
      }, [])
      
     const DeleteProducts = (id) =>{
         axios.delete(`http://localhost:5000/api/products/${id}`)
         .then(()=>{
            setProducts((prevProducts)=>(prevProducts.filter((product)=> product._id !== id)))
         })
         .catch((error)=>{
            console.error('Error deleting product:', error);
         })
     }


  return (
    <>
     <div className='flex flex-col justify-center items-center gap-5 mt-10'>
          <p className='text-center text-red-600 text-3xl font-bold'>Products</p>
          <Link to={"/create"}><button className='px-3 py-1 bg-red-600 my-2 rounded-md text-white '>Add Products</button></Link>
     </div>
        {products.length > 0 ?(
             <div className={`${
                    products.length === 1
                        ? "flex"
                        : products.length === 2
                        ? "flex gap-5"
                        : products.length === 3
                        ? "flex gap-5"
                        : "grid grid-cols-4"} justify-center items-center gap-4 mt-10 mb-5 mx-16`}>
           {products.map((product)=>(
                <div className='bg-slate-400 px-8 pt-3 gap-1 flex flex-col justify-center items-center h-[335px]' key={product._id}>
                     <img className='h-[220px]' src={product.image} alt=""/>
                    <p>Name: {product.name}</p>
                    <p>Price: ₱{product.price}</p>
                    <div className='flex flex-row justify-center items-center gap-4'>
                    <button className='px-3 bg-red-600 my-2 rounded-md text-white ' onClick={()=>DeleteProducts(product._id)}>Delete</button>
                    <button className='px-3 bg-red-600 my-2 rounded-md text-white '>Update</button>
                    </div>
                </div>
           ))}
      </div>
        ):(
          <div className='flex justify-center items-center mt-5'>
             <img className='w-[500px]' src={Noproducts} alt="" srcset="" />
          </div>
        )}
    </>
  )
}

export default Home