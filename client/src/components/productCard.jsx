import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
  
  return (
    <Link to={`/products/${item.documentId}`} className="cursor-pointer" >
      <div className="bg-neutralWhite-100 flex items-center justify-center">
        <img src={`http://localhost:1337${item.images[0].url}`} alt="" />
      </div>
      <h3 className="mt-6 mb-3 text-neutral-900 text-sm font-medium">
        {item.name}
      </h3>
      <div className="flex items-center gap-4">
        <p
          className={`text-neutral-900 text-[12px] font-medium border ${
            item.inStock ? 'border-neutral-100' : 'border-red-200'
          } rounded-2xl leading-6 px-4 py-[2px]`}
        >
          {item.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
        </p>
        <p className="text-neutral-600 text-sm">$ {item.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard