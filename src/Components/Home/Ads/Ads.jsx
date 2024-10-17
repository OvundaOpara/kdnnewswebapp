import React from 'react'
import { CiImageOn } from 'react-icons/ci'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ADS } from '../../../Data/Datas'

const Ads = () => {
  var settings = {
    dots: false,
    easing: 'ease-in-out', // Adjust transition easing as needed`
    type: 'linear',
    centerMode: true, // Enables centered slides
    centerPadding: '0px',
    infinite: true,
    speed: 1000, // Adjust scrolling speed as needed
    autoplay: true,
    autoplaySpeed: 5000, // Adjust autoplay speed as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false // Hide arrows
  }

  return (
    <div className='lg:px-24 px-9 my-24'>
      <Slider {...settings} className='flex items-center justify-center '>
        {ADS.map((ads, index) => (
          <div
            key={index}
            className='flex flex-wrap bg-stone-600  h-[400px] items-center justify-center rounded-xl w-[400px] lg:w-[100%]'
          >
            <div className='flex w-full items-center justify-center  rounded-xl h-[400px] bg-stone-600'>
              <h1 className='text-stone-300 bg-transparent text-xl'>
                {ads.name}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Ads
