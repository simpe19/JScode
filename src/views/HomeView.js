import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import ShowCase from '../sections/ShowCase'
import BannerSection from '../sections/BannerSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductsContext } from '../contexts/contexts'
import SupportSection from '../sections/SupportSection'
import TopProductSection from '../sections/TopProductSection'

const HomeView = () => {
  const productContext = useContext(ProductsContext)
  window.top.document.title = "Fixxo"


  return (
    <>
      <MainMenuSection />
      <ShowCase />
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <BannerSection />
      <TopProductSection />
      <SupportSection />
      <FooterSection />
    </>
  )
}

export default HomeView