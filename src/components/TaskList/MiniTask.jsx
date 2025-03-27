import React from 'react'

function MiniTask({bgcolor}) {
  return (
    <div className={`w-full m-3 p-5 ${bgcolor} flex justify-between rounded-2xl`} >
        <h1 className='text-2xl'>Ansh</h1>
        <h1 className='text-2xl'>Make a Youtube video</h1>
        <h1 className='text-2xl'>status:completed</h1>
    </div>
  )
}

export default MiniTask