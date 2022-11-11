import React from 'react'
import ProductCard from '../components/ProductCard'

const TopProductSection = ({ items = []}) => {

  return (
    <section className='top-products container'>
        <div className='box-left'>
            <div className='info-box'>
                <h2>2 FOR USD $29</h2>
                <button className="_btn-theme">
                    <span className="_btn-theme-left"></span>
                    FLASH SALE
                    <span className="_btn-theme-right"></span>
                </button>
            </div>
        </div>
        <div className='box-right'>
          <div className='box-right-fix row row-cols-1 row-cols-md-2 g-4'>
            {
              items.map( product => <ProductCard key={product.articleNumber} item={product} />)
            }
          </div>
        </div>

        <div className='box-right'>
          <div className='box-right-fix row row-cols-1 row-cols-md-2 g-4'>
            {
              items.map( product => <ProductCard key={product.articleNumber} item={product} />)
            }
          </div>
        </div>
        <div className='box-left'>
            <div className='info-box'>
                <h2>2 FOR USD $29</h2>
                <button className="_btn-theme">
                    <span className="_btn-theme-left"></span>
                    FLASH SALE
                    <span className="_btn-theme-right"></span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default TopProductSection