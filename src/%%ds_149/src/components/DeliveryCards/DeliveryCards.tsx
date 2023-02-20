import React from 'react'

import {PreparedDeliveryCardType} from "../../types/DeliveryInfoTypes"
import {DeliveryCard} from "../DeliveryCard"

type PropsType = {
  data: PreparedDeliveryCardType[]
}

export const DeliveryCards = ({data}: PropsType) => {
  return <section className='delivery__percentage'>
    <h2 className='delivery__percentage-title'> перечень товаров</h2>

    <div className='delivery__percentage-cards scroller'>
      {data.map(el => {
        return <DeliveryCard
          key={el.supplierCompanyName}
          name={el.supplierCompanyName}
          fact={el.productsInStock}
        />
      })}
    </div>

  </section>
}


