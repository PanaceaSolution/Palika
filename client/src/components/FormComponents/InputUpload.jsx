import React from 'react'

const InputUpload = ({label}) => {
  return (
    <div className='flex flex-col items-start justify-center p-4 my-2'>
        <h2 className='text-[#4472C4]'>{label}</h2>
        <input type="file" className='border-[#4472C4] outline-none border-[1px] rounded-sm p-2 focus:border-black capitalize' placeholder='Choose a file'/>
    </div>
  )
}

export default InputUpload