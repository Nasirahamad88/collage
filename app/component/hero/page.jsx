"use client"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"


import React, { useState } from 'react';
import Image from 'next/image';

function Hero() {
  

  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
    
      <div className='carousel-item relative'>
      <Image src="https://ems-files.softbd.xyz/thakurgaongovtcollege/file/notice/slider/slider-1667148355.jpg"
      
      height={600}
      width={1400}
      
      layout="responsive"
      
      />
      <div className='carousel-caption text-overlay absolute inset-1 flex flex-col items-center justify-end bg-black bg-opacity-50 text-white p-4 rounded'>
        <h1>This is 1st image</h1>
      </div>
      </div>
      <div className='carousel-itam relative'>
      <Image src="https://ems-files.softbd.xyz/thakurgaongovtcollege/file/notice/slider/slider-1667148471.jpg"
      
      height={600}
      width={1400}
      
      layout="responsive"
      
      />
      <div className='carousel-caption text-overlay absolute inset-1 flex flex-col items-center justify-end bg-black bg-opacity-50 text-white p-4 rounded'>
        <h1>This is 2nd image</h1>
      </div>
      </div>
      <div className='carousol-itam relative'>
      <Image src="https://ems-files.softbd.xyz/thakurgaongovtcollege/file/notice/slider/slider-1681197447.jpg"
      
      height={600}
      width={1400}
      
      layout="responsive"
      
      />
      <div className='carousel-caption text-overlay absolute inset-1 flex flex-col items-center justify-end bg-black bg-opacity-50 text-white p-4 rounded'>
        <h1>This is 3rd image</h1>
      </div>
      </div>
      

      
    
    </Carousel>
    
  );
}

export default Hero;
