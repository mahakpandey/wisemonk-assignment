import React from 'react'

const Card = ({ children , className}) => {
  return (
    <div className={`${className} px-5 py-4 bg-white hover:bg-[#F0F1F1] rounded-lg shadow-xs`}>
      {children}
    </div>
  )
}

export default Card