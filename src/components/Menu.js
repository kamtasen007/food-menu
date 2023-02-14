import React from 'react'
import Itemcard from './Itemcard'
import data from './data'
import Cart from './Cart'

const Menu = () => {

  return (
    <div>

      <section className='py-4 container'>
        <div className='row '>
          {data.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                name={item.name}
                price={item.price}
                item={item}
                key={index} />
            )
          })
          }

        </div>

      </section>

      <div className='cart'>
        <Cart />
      </div>
    </div>
  )
}

export default Menu
