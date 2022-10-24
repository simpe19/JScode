import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import ShoppingCartView from './views/ShoppingCartView';
import WishlistView from './views/WishlistView';
import CompareView from './views/CompareView';
import SearchView from './views/SearchView';
import ProductsView from './views/ProductsView';
import CategoriesView from './views/CategoriesView';
import NotFoundView from './views/NotFoundView';
import FooterSection from './sections/FooterSection';
import MainMenuSection from './sections/MainMenuSection';



function App() {
  return (
    <BrowserRouter>
    <MainMenuSection />
      <Routes>
        <Route path='/' element={<HomeView/>} />
        <Route path='/categories' element={<CategoriesView/>} />
        <Route path='/products' element={<ProductsView/>} />
        <Route path='/contacts' element={<ContactsView/>} />
        <Route path='/search' element={<SearchView/>} />
        <Route path='/compare' element={<CompareView/>} />
        <Route path='/wishlist' element={<WishlistView/>} />
        <Route path='/shoppingcart' element={<ShoppingCartView/>} />
        <Route path='*' element={<NotFoundView/>} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
