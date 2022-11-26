import React from 'react'

// styles is passed as a prop
const Button = ({styles}) => {
  return (
    <button type='button' className={`rounded-md py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
      Empezar
    </button>
  )
}

export default Button