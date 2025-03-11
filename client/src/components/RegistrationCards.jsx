import React from 'react'

const RegistrationCards = ({source, Ename, Nname,onClick}) => {
  return (
    <div className='h-[30%] w-[40%] flex items-center justify-center gap-12 rounded-lg bg-white hover:shadow-lg hover:cursor-pointer hover:border-red-500 hover:scale-[1.05] ease-in-out duration-300 hover:shadow-red-500' onClick={onClick}>
        <img src={source} alt="" className='h-[50px] w-[50px]' />
        <div className="text">
            <h1 className='text-xl text-[#4472C4]'>{Ename}</h1>
            <h2 className='text-lg text-[#4472C4]'>{Nname}</h2>
        </div>
    </div>
  )
}

export default RegistrationCards