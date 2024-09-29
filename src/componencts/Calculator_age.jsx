import React from 'react'

function Calculator_age({show}) {
    
  return (
    <div className='flex flex-col leading-[65px] py-8'>
        <div className='flex flex-row items-baseline text-[70px] italic'>
            <div className=' font-bold text-purple'>{show !==''?show.year:'--'} </div>
            <div className='font-extrabold'>years</div>
        </div>
        <div className='flex flex-row items-baseline text-[70px] italic'>
            <div className='font-bold text-purple'>{show !==''?show.month:'--'}</div>
            <div className='font-extrabold'>months</div>
        </div>
        <div className='flex flex-row items-baseline text-[70px] italic'>
            <div className='font-bold text-purple'>{show !==''?show.day:'--'}</div>
            <div className='font-extrabold'>days</div>
        </div>
    </div>
  )
}

export default Calculator_age