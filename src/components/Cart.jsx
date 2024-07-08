import React from 'react'

function Cart() {
  return (
    <>
    <h1 className="font-sans text-2xl font-black flex justify-center">Carts</h1>
    <div className='flex justify-center w-100'>
    <div className='w-72 bg-[#1da1f2] flex justify-center items-center h-50'>
        <img className='mr-10' src='product img'/>
        <div className='flex flex-col justify-between bg-[#65a30d] max-w-72'>
        <h3 className='text-lg font-bold'>product name</h3>
        <h4 className='text-base font-semibold'>product price</h4>
        </div>
    </div>
    </div>
    </>
  )
}

export default Cart