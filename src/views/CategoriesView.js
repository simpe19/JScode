import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const CategoriesView = () => {
  window.top.document.title = "Categories"
  return (
    <>
    <MainMenuSection />
    <FooterSection />
    </>
  )
}

export default CategoriesView