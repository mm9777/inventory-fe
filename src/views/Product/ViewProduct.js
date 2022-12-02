// import Model from './views/Model/Model'
import { cibTableau } from '@coreui/icons'
import Spinner from 'src/components/spinner';
import React from 'react'
import { Suspense } from 'react';
const ProductList = React.lazy(() => import('../../components/productList')); // Lazy-loaded
const ViewProduct = () => {
 

  return (
      <>
         <ProductList/>
         
    </>
  )
}

export default ViewProduct
