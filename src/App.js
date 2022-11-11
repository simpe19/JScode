import React, {useEffect, useState} from 'react'
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import ShoppingCartView from './views/ShoppingCartView';
import WishlistView from './views/WishlistView';
import CompareView from './views/CompareView';
import SearchView from './views/SearchView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import CategoriesView from './views/CategoriesView';
import NotFoundView from './views/NotFoundView';
import { ProductsContext } from './contexts/contexts'


function App() {
  const [products, setProducts] = useState({
    all: [],
    featuredProducts: [],
    listProducts: []
  })
 

  useEffect (() => {
     const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      let Data = await result.json()
      setProducts( oldProducts => {
        return {...oldProducts, allProducts: Data}})
     }
     fetchAllProducts()

     const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      let Data = await result.json()
      setProducts( oldProducts => {
        return {...oldProducts, featuredProducts: Data}})
     }
     fetchFeaturedProducts()

     const fetchlistProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      let Data = await result.json()
      setProducts( oldProducts => {
        return {...oldProducts, listProducts: Data}
      })
     }
     fetchlistProducts()

  }, [])

  return (
    <BrowserRouter>
      <ProductsContext.Provider value={products}>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/products' element={<ProductsView />} />
          <Route path='/categories' element={<CategoriesView />} />
          <Route path='/products' element={<ProductsView />} />
          <Route path='/products/:name' element={<ProductDetailsView />} />
          <Route path='/contacts' element={<ContactsView />} />
          <Route path='/search' element={<SearchView />} />
          <Route path='/compare' element={<CompareView />} />
          <Route path='/wishlist' element={<WishlistView />} />
          <Route path='/shoppingcart' element={<ShoppingCartView />} />
          <Route path='*' element={<NotFoundView />} />
        </Routes>
      </ProductsContext.Provider>
    </BrowserRouter>
  )
}

export default App;
