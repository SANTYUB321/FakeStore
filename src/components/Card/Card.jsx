import React from 'react'


export const Card = ({price, img,title, allProducts, setallProducts }) => {

  const onAddProduct =()=>{
    console.log("add");
  }

  return (
    <div className='w-72 h-[340px] flex flex-col border-double m-4 place-content-center items-center border-8 rounded-6' >

   <div className='w-40 h-36 flex place-content-center m-1'>
    <img className='w-full h-full' src={img} alt="" sizes="" />
   </div>
    <div className='flex flex-col place-content-center items-center text-center m-2'>
        <h2 className='font-medium font-serif mb-1 '>{title}</h2>
        <p className='mb-1 font-medium text-lg'>{price}$</p>
        <input type="button" value="Agregar Al Carrito" className='bg-green-500 p-1 rounded-lg border border-black font-semibold' onClick={() =>onAddProduct()}/>
    </div>
    </div>
  )
}