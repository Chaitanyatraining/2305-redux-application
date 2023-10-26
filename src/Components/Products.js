import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsData()
    }, [])

    const getProductsData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
    }

  return (
    <div>
        <div className='container'>
            <h2>Products</h2>
        <div className='row'>
            {
                products.length > 0 ? (
                 products.map((product) =>(
                    <div className='col-md-3'>
                        <Link to={`/product/${product.id}`}>
                        <div key={product.id} className='card my-2'>
                            <img src={product.image} alt={product.title} />
                        <div className='cart-body'>
                            <h4 className='cart-title'>{product.category}</h4>
                        </div>
                        </div>
                        </Link>
                    </div>
                 ))
                ) : <p>Loading...</p>
            }
        </div>
        </div>
    </div>
  )
}

export default Products