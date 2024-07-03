import React, { useContext, useState } from 'react'
import { OrderContext } from '../../context/OrderContext';

const SummaryPage = ({setStep}) => {

  const [checked, setChecked] = useState(false);
  const [orderDatails] = useContext(OrderContext);

  const productArray = Array.from(orderDatails.products);
  const productList = productArray.map(([key, value]) => {
    <li>
      {value}: {key}
    </li>
  })

  const hasOptions = orderDatails.options.size > 0;
  let optionsDisplay = null;

  if(hasOptions){
    const optionsArray = Array.from(orderDatails.options.keys());
    const optionList = optionsArray.map((key) => {
      <li key={key}>{key}</li>
    })
    optionsDisplay = (
      <>
        <h2>옵션: {orderDatails.totals.options}</h2>
        <ul>{optionList}</ul>
      </>
    )
  }

  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품: {orderDatails.totals.products} </h2>
      <ul>
        {productList}
      </ul>

      {optionsDisplay}
      <form onSubmit={(event) => {
        event.preventDefault();
        setStep(2)}}
        >
        <input type='checkbox' checked={checked} id="confirm-checkbox"
                onChange={(e) => {
                  setChecked(e.target.checked)
                }}/>{" "}
        <label htmlFor='confirm-checkbox'>주문하려는 것을 확인하셨나요?</label>
        <br/>
        <button type='submit' disabled={!checked}>
          주문 확인
        </button>
      </form>
    </div>
  )
}

export default SummaryPage