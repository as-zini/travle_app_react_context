import React from 'react'

const ErrorBanner = (message) => {
  let errorMassage = message || "에러입니다."
  return (
    <div style={{color:"red"}}>{message}</div>
  )
}

export default ErrorBanner