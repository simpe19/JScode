import React, {useContext} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import ShowCase from '../sections/ShowCase'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductsContext } from '../contexts/contexts'

const HomeView = () => {
  const productContext = useContext(ProductsContext)
  window.top.document.title = "Fixxo"


  return (
    <>
    <MainMenuSection />
    <ShowCase />
    <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
    <FooterSection />
    </>
  ) 
}

export default HomeView