'use client'
import React, { FC } from 'react'

const Button:FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Button
