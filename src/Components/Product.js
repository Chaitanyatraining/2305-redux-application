import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    const getProduct = async () => {
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(data)
    }
    useEffect(() => {
        getProduct()
    }, [])

    // array.length
    // for object - Object.keys()
  return (
    <div>
        <h2>Product Details Page</h2>
            <div className='container'>
                {
                    Object.keys(product).length > 0 ? (
                        <div className='row border'>
                            <div className='col-md-6 p-5 mt-2 '>
                                <img src={product.image} className='img-fluid' />
                            </div>
                            <div className='col-md-6 border'>
                              <div className='mt-2'>
                                <h3 className='text-center'>
                                    {product.title}
                                </h3>
                              </div>
                            </div>
                        </div>
                    ) : <p>Loading</p>
                }
            </div>
    </div>
  )
}

export default Product