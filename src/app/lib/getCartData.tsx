import React from 'react'

const getCartData = async (endPoint: string) => {
  const response = await fetch(endPoint);
  return response.json();
}

export default getCartData
