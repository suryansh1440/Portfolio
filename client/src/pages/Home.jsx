import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Waves from '../ReactsBits/Waves';
import TiltedCard from '../ReactsBits/TiltedCard';
import DecryptedText from '../ReactsBits/DecryptedText';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import MainPhoto from '../assets/MainPhoto.jpg';

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 2500); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <Header />

      <div className='flex flex-col bg-black min-h-[100vh] border w-full overflow-hidden relative sticky top-0'>
        <Waves
          lineColor="#fff"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />

        {/* Your home page content goes here */}
        <div className="absolute w-full h-full lg:flex-row flex-col flex justify-center items-center">
          <div className='h-full lg:w-[65%] w-full ml-5 flex item-center justify-center text-white font-bold text-4xl flex-col lg:mt-0 mt-50 lg:p-10'>
            <h1 className='lg:text-6xl text-4xl font-bold text-white' style={{ fontFamily: 'Space Mono, monospace' }}>Hello, I'm</h1>

            <motion.div
              className='flex flex-row lg:text-8xl text-4xl mt-7 font-bold text-white'
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              <DecryptedText
                text="Suryansh Singh"
                animateOn="view"
                speed={300}
                revealDirection="start"
              />
            </motion.div>
            {showAnimation && (
              <motion.div
                className='mt-10 lg:text-6xl text-xl font-bold text-white'
                style={{ fontFamily: 'Space Mono, monospace' }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <TypeAnimation
                  sequence={[
                    'I Am Frontend Developer',
                    1000,
                    'I Am Backend Developer',
                    1000,
                    'I Am UI/UX Designer',
                    1000,
                  ]}
                  speed={60}
                  style={{ fontSize: '1em' }}
                  repeat={Infinity}
                />
              </motion.div>
            )}
          </div>
          <motion.div
            className='h-full lg:w-[35%] w-[100%] flex items-center justify-left'
            initial={{ x: 200, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <TiltedCard
              imageSrc={MainPhoto}
              altText="Surya Photo"
              captionText="Admin"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={13}
              scaleOnHover={1.3}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={null}
            />
          </motion.div>
        </div>
      </div>
      <div className='h-[100vh] w-full bg-black sticky top-0 z-10 '>
        {/* Additional content */}
      </div>
    </>
  );
};

export default Home;
