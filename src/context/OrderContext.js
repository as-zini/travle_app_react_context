import { createContext, useEffect, useMemo, useState } from "react";

export const OrderContext = createContext();

export function OrderContextProvider({children}){
  const [orderCounts, setorderCounts] = useState({
    products: new Map(),
    options: new Map()
  })
  const [totals, setTotals] = useState({
    products: 0,
    options: 0,
    total: 0
  })

  const pricePerItem = {
    products: 1000,
    options: 500
  }

  const calculateSubtotal = (orderType, orderCounts) => {
    let optionCount = 0;
    for(const count of orderCounts[orderType].values()){
      optionCount += count
    }
    return optionCount * pricePerItem[orderType]
  }

  useEffect(() => {
    const productsTotal = calculateSubtotal("products", orderCounts);
    const optionsTotal = calculateSubtotal("options", orderCounts);
    const total = productsTotal + optionsTotal;
    setTotals({
      products: productsTotal,
      options: optionsTotal,
      total
    })
  },[orderCounts])

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, orderType){
      const newOrderCount = {...orderCounts};
      const orderCountsMap = orderCounts[orderType];
      orderCountsMap.set(itemName, parseInt(newItemCount))
      setorderCounts(newOrderCount)
    }
    return [{...orderCounts, totals}, updateItemCount]}, [orderCounts, totals])

  return(
    <OrderContext.Provider value={value} >
      {children}
    </OrderContext.Provider>
  )
}