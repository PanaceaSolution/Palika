import React from 'react'
import CoatOfArms from "/coat-of-arms.png"
import { Link } from 'react-router-dom'

const Header = () => {
  const listStyle=`hover:scale-[1.1] duration-200`;
  return (
    <>
        <header className='h-[15vh] w-[100vw] flex items-center justify-center gap-14'>
            <div className="img-container">
                <img src={CoatOfArms} alt="" className='' />
            </div>
            <div className="text-container">
                <h1 className='text-3xl text-red-700 font-semibold'>महाङ्काल गाउँपालिका</h1>
                <h2 className='text-xl text-[#4472C4]'>गोटिखेल, ललितपुर नेपाल</h2>
                <h2 className='text-xl text-white bg-[#4472C4] px-2 py-1'>व्यवसाय दर्ता तथा नविकरण प्रणाली</h2>
            </div>
            <img src="/nepal-flag.gif" alt="Nepali Flag" className='h-[12vh] w-auto' />
            
        </header>
        <div className="blue h-[7vh] w-[100vw] bg-[#4472C4] flex items-center justify-between">
          <ul className='flex h-[100%] w-[60%] items-center justify-evenly gap-6 text-white font-medium text-lg'>
            <li className={listStyle}><a href='/home'>Home</a></li>
            <li className={listStyle}><a href='/register'>Register</a></li>
            <li className={listStyle}><a href='/renew'>Renew</a></li>
            <li className={listStyle}><a href='/information'>Information</a></li>
          </ul>
          <div className='flex justify-evenly items-center gap-4'>
            <button className='bg-black text-white px-2 py-1 rounded-[5px] cursor-pointer'>Eng</button>
            <button className='bg-[#C00B11] text-white px-2 py-1 rounded-[5px] cursor-pointer'>Nep</button>
          </div>
        </div>
    </>
  )
}

export default Header