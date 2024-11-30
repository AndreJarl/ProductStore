import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateProduct() {

    const navigate = useNavigate();

    
   const [product, setNewProduct] = useState({
        name: '',
        price: '',
        image: ''
   });

    const CreateProduct = async (e) => {
     

       console.log(product);

       if(!product.name || !product.price || !product.image){
          alert("Pls input all fields.");
          return;
       }
      

        try{
          const response = await axios.post('http://localhost:5000/api/products', product);
          console.log('Product created:', response.data);
          setNewProduct({ name: '', price: '', image: '' });
         navigate("/");

        }catch(error){
            alert('Error creating product.');
            console.log(product);
            console.error('Error creating product:', error);
        }
    }

  return (
    <div className='flex flex-col justify-center items-center'>
         <p className='mt-10 text-center text-3xl font-bold text-red-600'>Create Product</p>
        <div className='flex flex-col justify-center items-center gap-6 mt-8'>
             <div className='flex flex-row gap-2 items-center justify-center'>
                 <p>Product Name:</p>
                 <input value={product.name}
                       onChange={(e) => setNewProduct({...product, name: e.target.value})}
                  className='border-2 border-black px-2' type="text"/>
             </div>
             <div className='flex flex-row gap-2 items-center'>
                 <p>Product Price:</p>
                 <input value={product.price} onChange={(e)=> setNewProduct({...product, price: e.target.value})} className='border-2 border-black px-2' type="text"/>
             </div>
             <div className='flex flex-row gap-2 items-center'>
                 <p>Product Image Link:</p>
                 <input value={product.image} onChange={(e)=>setNewProduct({...product, image: e.target.value})} className='border-2 border-black px-2' type="text"/>
             </div>
        </div>
         <button onClick={() => CreateProduct()} className='px-3 bg-red-600 my-2 rounded-md text-white mt-7 py-2'>Add Product</button>
    </div>
  )
}

export default CreateProduct