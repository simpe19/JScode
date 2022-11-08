import React, { useContext} from 'react'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import MainMenuSection from '../sections/MainMenuSection'
import { ProductsContext } from '../contexts/contexts'


const ProductsView = () => {
  const productContext = useContext(ProductsContext);
  // window.top.document.title = "Products"
  return (
    <>

      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title=" Products" items={productContext.all}/>
      <FooterSection />
    </>
  )
}

export default ProductsView