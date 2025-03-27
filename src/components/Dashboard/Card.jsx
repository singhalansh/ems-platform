import React from 'react'

function Card({num,title}) {
  return (
    <div className='w-1/3 mt-30 rounded-xl bg-zinc-800 p-5 flex flex-col gap-6 justify-around items-center shadow-xl'>
        <h1 className='text-3xl font-bold'>{num}</h1>
        <h2 className='text-2xl font-bold capitalize'>{title}</h2>
    </div>
  )
}

export default Card