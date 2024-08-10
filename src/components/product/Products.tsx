import { Product } from '@/Types'
import React from 'react'
import ProductCard from './ProductCard'

const Products = ({products} : {products : Product[]}) => {
  return (
    <div className='grid grid-cols-3 place-items-center gap-6'>
      {products.map((product) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </div>
  )
}

export default Products
