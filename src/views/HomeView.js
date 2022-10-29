import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import ShowCase from '../sections/ShowCase'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {
  return (
    <>
    <MainMenuSection />
    <ProductGridSection title="Featured Products" />
    <ShowCase />
    <FooterSection />
    </>
  ) 
}

export default HomeView