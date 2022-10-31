import React, {useState} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import ShowCase from '../sections/ShowCase'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {

  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "fashion", price: "35.00$", rating: 5, img: "https://images.pexels.com/photos/462402/pexels-photo-462402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 2, name: "Modern Black Blouse", category: "fashion", price: "35.00$", rating: 5, img: "https://images.pexels.com/photos/462402/pexels-photo-462402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 3, name: "Modern Black Blouse", category: "fashion", price: "35.00$", rating: 5, img: "https://images.pexels.com/photos/462402/pexels-photo-462402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 4, name: "Modern Black Blouse", category: "fashion", price: "35.00$", rating: 5, img: "https://images.pexels.com/photos/462402/pexels-photo-462402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
  ])
  const [topProducts, setTopProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "fashion", price: "35.00$", rating: 5, img: "https://images.pexels.com/photos/462402/pexels-photo-462402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 2, name: "Modern Black Blouse", category: "fashion", price: "35.00$", rating: 5, img: "https://images.pexels.com/photos/462402/pexels-photo-462402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 3, name: "Modern Black Blouse", category: "fashion", price: "35.00$", rating: 5, img: "https://images.pexels.com/photos/462402/pexels-photo-462402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
  ])

  return (
    <>
    <MainMenuSection />
    <ShowCase />
    <ProductGridSection title="Featured Products" products={featuredProducts} />
    <ProductGridSection title="Top Products" products={topProducts} />
    <FooterSection />
    </>
  ) 
}

export default HomeView