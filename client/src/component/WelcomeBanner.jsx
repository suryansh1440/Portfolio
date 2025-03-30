import React from 'react'
import animationLogo from '../assets/animationLogo.png'


const WelcomeBanner = ({title, subtitle}) => {
  return (
       <div className='about lg:h-[15vh] h-[10vh] w-full bg-black z-10 overflow-hidden relative lg:my-0 my-2'>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div
          className='flex items-center font-bold whitespace-nowrap lg:p-8 pt-3 relative'
          style={
            {
              animation: 'marquee 20s linear infinite',
            }
          }
        >
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <p className='mr-5 lg:text-4xl text-2xl text-white'>{title} </p>
              <img src={animationLogo} alt="logo" className='lg:w-[4%] w-[10%] mr-5 animate-pulse' />
              <p className='mr-5 lg:text-4xl text-2xl text-white'>{subtitle}</p>
              <img src={animationLogo} alt="logo" className='lg:w-[4%] w-[10%] mr-5 animate-pulse' />
            </React.Fragment>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
          }
        `}</style>
      </div>
  )
}

export default WelcomeBanner
