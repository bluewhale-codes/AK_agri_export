import React from 'react'

import CircularGallery from '../Compo/CicularGallery'
import ProductPageBanner from './ProductPageBanner'
import ProductShowcaseApp from './ProductShowcaseApp'
const Products = () => {
  return (
    <div>

         <div>
          <ProductPageBanner/>
         </div>
            <div>
                <ProductShowcaseApp/>
            </div>


    </div>
  )
}

export default Products