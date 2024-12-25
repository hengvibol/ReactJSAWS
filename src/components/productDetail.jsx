import React from 'react'

import { Hero } from './ShopDetails/hero';
import { DetailProduct } from './ShopDetails/detailProduct';
import { RelatedProduct } from './ShopDetails/relatedProduct';

export const ProductDetail = () => {
  return (
    <div>
        <Hero />
        <DetailProduct />
        <RelatedProduct />
    </div>
  )
}
