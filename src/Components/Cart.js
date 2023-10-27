import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    // we have a hook to access the redux state
    const [total, setTotal] = useState(0)
   const cart_data = useSelector((state)=> state.productsData.cartData)
  return (
    <div>
        <h2>Cart Page</h2>
    <div className='product_total'>
        <p>Total Price: {total}</p>
    </div>
    <div className='container mt-2 border border-dark'>
    {
        cart_data && cart_data.length > 0 ? (
            cart_data.map((product) => (
                <div className='row mt-3'>
                    <div className='col-md-4'>
                        <img style={{maxHeight:"300px"}} src={product.image} alt={product.title} className='img-fluid' />
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <h4>Title: {product.title}</h4>
                            <h5>Category: {product.category}</h5>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='mt-2'>
                            <div className='pt-2'>
                                Price: {product.price}
                            </div>
                            <div>
                                <button className='btn btn-danger'>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        ) :
         (<p>Please add items to cart</p>)
    }
    </div>
    </div>
  )
}

export default Cart