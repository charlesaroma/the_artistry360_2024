import React from 'react';
import BgVideo from '../../assets/videos/SonyCam.mp4'
import { ReactTyped } from "react-typed";
import { NavLink } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='w-full h-[80vh] lg:h-screen'>
      {/* Background Video */}
      <div className="relative h-screen">
        <video
          className="absolute top-0 left-0 z-[-2] w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-1]"></div>

        {/* Text & Buttons */}
        <div className='w-full min-h-screen h-full  lg:h-screen flex flex-col items-center justify-center space-y-5'>
          {/* Main Text */}
          <h1 className='text-3xl md:text-6xl text-[#F2F2F2] text-center font-extrabold'>
            Strong, Bold & Confident
          </h1>

          {/* ReactTyped Text */}
          <h2 className="w-full font-semibold text-[#f67d12] text-xl md:text-3xl text-center ">
            <ReactTyped
              strings={[
                'Find Your Spotlight Moments With Us',
                'Unlock Your Potential.',
                'Discover Your Strength.',
                'Transform Your Talent.',
                'Achieve Excellence.',
                'Build Confidence.'
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>

          {/* Buttons */}
          <div className="flex space-x-4 mt-5">
            {/* About Us Link */}
            <NavLink
              to="/about"
              className="w-36 px-6 py-2 bg-transparent text-center text-[#f2f2f2] font-semibold border border-[#f2f2f2] hover:bg-[#f2f2f2] hover:text-black transition duration-300"
            >
              About Us
            </NavLink>
            {/* Gallery Link */}
            <NavLink
              to="/gallery"
              className="w-36 px-6 py-2 bg-transparent text-center text-[#f67d12] font-semibold border border-[#f67d12] hover:bg-[#f67d12] hover:text-white transition duration-300"
            >
              Gallery
            </NavLink>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Hero