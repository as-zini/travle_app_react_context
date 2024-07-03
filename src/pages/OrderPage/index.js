import React, { useContext } from 'react'
import Type from '../../components/Type'
import { OrderContext } from '../../context/OrderContext'

const OrderPage = ({setStep}) => {
  const [orderData] = useContext(OrderContext)
  return (
    <div>
      <h1>Travel Products</h1>
      <div>
        <Type orderType="products"></Type>
      </div>
      <div style={{display:'flex', marginTop: 20}}>
        <div style={{width: '50%'}}>
          <Type orderType="options"></Type>
        </div>
        <div style={{width: '50%'}}></div>
          <h2>Total Price: {orderData.totals.total}</h2>
          <button onClick={() => setStep(1)}>주문</button>
      </div>
    </div>
  )
}

export default OrderPage