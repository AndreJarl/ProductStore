import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Home() {
      const [products, setProducts] = useState([]);

      useEffect(() => {
        axios
        .get('http://localhost:5000/api/products')
        .then(function (response) {
            setProducts(response.data.data);
            console.log(response.data.data);
            
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
          
      }, [])
      

  return (
    <>
     
        {products.length > 0 ?(
             <div>
           {products.map((product)=>(
                <div key={product._id}>
                    <p>Name: {product.name}</p>
                    <p>Price: {product.price}</p>
                    <img src={product.image} alt=""/>
                </div>
           ))}
      </div>
        ):(
          <div>
              NO PRODUTS
          </div>
        )}
    </>
  )
}

export default Home