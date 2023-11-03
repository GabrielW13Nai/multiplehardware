import { React, useRef, useState } from 'react'
import Navigation from '../Cards/Navigation';
import multiple1 from '../images/multiple1.jpg'
import multiple2 from '../images/multiple2.jpg'
import multiple3 from '../images/multiple3.jpg'
import multiple4 from '../images/multiple4.jpg'
import multiple5 from '../images/multiple5.JPG'
import multiple6 from '../images/multiple6.JPG'
import { Icon } from '@iconify/react';

const About = () => {

  const sliderRef = useRef(null)
  const scrollAmt = 800;
  const images = [
    {
      id: 1,
      url: multiple1
    },
    {
      id: 2,
      url: multiple2
    },
    {
      id: 3,
      url: multiple3
    },
    {
      id: 4,
      url: multiple4
    },
    {
      id: 5,
      url: multiple5
    },
    {
      id: 6,
      url: multiple6
    }
  ]

  // const rightScroll = () => {
  //   const slider = document.getElementById('gallery')
  //   slider.scrollLeft = slider.scrollLeft + 500
  // }

  // const leftScroll = () => {
  //   const slider = document.getElementById('gallery')
  //   slider.scrollLeft = slider.scrollLeft - 500
  // }
  const [slide, setSlide] = useState(0)
  return (
    <>
      <Navigation />
      <div className='about-main'>
        <div className='about-title'>
          <h2>About Us</h2>
        </div>
        <div className='about-container'>
          <div className='about-para'>
            <p>Multiple hardware was established back in 1990, as a trading business. For over
            30 years, we have sold our products to millions of customers.
            We are located along Naivasha Road in Dagoretti Corner. Contact us for more
            information.
            </p>
          </div>
        </div>
      </div>
      <div className="about-secnd-ctn">
        <div>
          <Icon icon="ci:chevron-left"
            className="icon"
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft -= scrollAmt;
              setSlide(slide === 0? images.length - 1: slide - 1)
            }}
          />
        </div>

        <div className='img-grid duration-500' ref={sliderRef} >
          {images.map((img, idx) => {
            return(
              <img
              className={slide === idx? 'gallery-item': 'gallery-item-none'}
              src={img.url}
              alt='not found'
              key={idx}
              
              />
              )
            })}
        </div>
          <Icon icon="ci:chevron-right"
            className="icon"
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft += scrollAmt;
              setSlide(slide === images.length - 1? 0 : slide + 1)
            }}
          />
      </div>


    </>

  )
}

export default About
