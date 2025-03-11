import React from 'react'

const FormHeader = ({label,value}) => {
  return (
    <div className='h-auto w-auto flex gap-6 px-4 py-6 items-center'>
        <label className='text-xl text-[#4472C4]'>{label} :</label>
        <input type="text" className='outline-none custom-input-border p-1 tracking-wide font-medium' disabled value={value}/>
    </div>
  )
}

export default FormHeader