import React from 'react'

const FormTextInput = ({label,width}) => {
  const contentWidth=width || 'w-[10vw]';
  return (
    <div className='flex flex-col items-start justify-center p-4 my-2'>
        <h2 className='text-[#4472C4]'>{label}</h2>
        <input type="text" className={`border-[#4472C4] outline-none border-[1px] rounded-sm p-2 focus:border-black capitalize ${contentWidth}`}/>
    </div>
  )
}

export default FormTextInput