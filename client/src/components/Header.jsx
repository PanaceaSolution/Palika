import React from 'react'
import CoatOfArms from "/coat-of-arms.png"

const Header = () => {
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
            
        </header>
        <div className="blue h-[5vh] w-[100vw] bg-[#4472C4]"></div>
    </>
  )
}

export default Header