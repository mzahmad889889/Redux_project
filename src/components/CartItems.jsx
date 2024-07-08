import React from 'react'
import apple from '../images/apple.jpg'
import avocodo from '../images/avecodo.jpg'
import banana from '../images/Banana.jpg'
import lemon from '../images/greenlemon.jpg'
import orange from '../images/orange.jpg'
import pomegranate from '../images/ponygernade.jpg'
import smalllemon from '../images/smalllemon.jpg'
import softlemon from '../images/softLemon.jpg'
function CartItems() {
  return (
    <>
    <h1 className='text-2xl font-black flex justify-center mt-10'>Products</h1>
    <div className='flex justify-evenly mt-10'>
      <div className='flex flex-col border-2 rounded-s rounded-e shadow-xl' >
          <img className='border-2 rounded-s hover:animate-pulse' src={apple} alt='apple' width='200px' height='200px'/>
          <h2 className='text-3xl font-semibold'>Apple</h2>
          <h3 className='text-xl font-semibold mt-2'>$3</h3>
          <button className='bg-orange-950 text-white hover:animate-bounce'>Add to Cart</button>
      </div>

      <div className='flex flex-col border-2 rounded-s rounded-e shadow-xl' >
          <img className='border-2 rounded-s hover:animate-pulse' src={avocodo} alt='apple' width='200px' height='200px'/>
          <div className='flex flex-col justify-end mt-16'>
          <h2 className='text-3xl font-semibold'>Avocodo</h2>
          <h3 className='text-xl font-semibold mt-2'>$2.5</h3>
          <button className='bg-orange-950 text-white hover:animate-bounce'>Add to Cart</button>
          </div>
      </div>

      <div className='flex flex-col border-2 rounded-s rounded-e shadow-xl' >
          <img className='border-2 rounded-s hover:animate-pulse' src={banana} alt='apple' width='200px' height='200px'/>
          <div className='flex flex-col justify-end mt-16'>
          <h2 className='text-3xl font-semibold'>Banana</h2>
          <h3 className='text-xl font-semibold mt-2'>$1.9</h3>
          <button className='bg-orange-950 text-white hover:animate-bounce '>Add to Cart</button>
          </div>
      </div>
    </div>

    <div className='flex justify-evenly mt-10'>
      <div className='flex flex-col border-2 rounded-s rounded-e shadow-xl' >
          <img className='border-2 rounded-s hover:animate-pulse' src={lemon} alt='apple' width='200px' height='150px'/>
          <h2 className='text-3xl font-semibold'>Lemon</h2>
          <h3 className='text-xl font-semibold mt-2'>$0.5</h3>
          <button className='bg-orange-950 text-white hover:animate-bounce'>Add to Cart</button>
      </div>

      <div className='flex flex-col border-2 rounded-s rounded-e shadow-xl' >
          <img className='border-2 rounded-s hover:animate-pulse' src={orange} alt='apple' width='200px' height='200px'/>
          <div className='flex flex-col justify-end mt-28'>
          <h2 className='text-3xl font-semibold'>Orange</h2>
          <h3 className='text-xl font-semibold mt-2'>$1.5</h3>
          <button className='bg-orange-950 text-white hover:animate-bounce'>Add to Cart</button>
          </div>
      </div>

      <div className='flex flex-col border-2 rounded-s rounded-e shadow-xl' >
          <img className='border-2 rounded-s hover:animate-pulse' src={pomegranate} alt='apple' width='200px' height='200px'/>
          <div className='flex flex-col justify-end mt-28'>
          <h2 className='text-3xl font-semibold'>Pomegranate</h2>
          <h3 className='text-xl font-semibold mt-2'>$4.9</h3>
          <button className='bg-orange-950 text-white hover:animate-bounce '>Add to Cart</button>
          </div>
      </div>
    </div>

    <div className='flex justify-evenly mt-10'>
      <div className='flex flex-col border-2 rounded-s rounded-e shadow-xl' >
          <img className='border-2 rounded-s hover:animate-pulse' src={smalllemon} alt='apple' width='200px' height='200px'/>
          <div className='flex flex-col justify-end mt-16'>
          <h2 className='text-3xl font-semibold'>Small Lemon</h2>
          <h3 className='text-xl font-semibold mt-2'>$2.3</h3>
          <button className='bg-orange-950 text-white hover:animate-bounce'>Add to Cart</button>
          </div>
      </div>

      <div className='flex flex-col border-2 rounded-s rounded-e shadow-xl' >
          <img className='border-2 rounded-s hover:animate-pulse' src={softlemon} alt='apple' width='200px' height='200px'/>
          <div className='flex flex-col justify-end mt-16'>
          <h2 className='text-3xl font-semibold'>Soft Lemon</h2>
          <h3 className='text-xl font-semibold mt-2'>$1.2</h3>
          <button className='bg-orange-950 text-white hover:animate-bounce'>Add to Cart</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default CartItems