import React from 'react';
import Heronavbar from './Heronavbar';
import { Link } from 'react-router-dom';
import Footer from './footer';
import AutoPlay from './Carousel';

const Hero = () => {
  return (
    <div className='overflow-x-hidden scroll-auto'>
      <Heronavbar />
      <div className='herohomebg w-full h-[50vh] flex justify-center items-center text-white bg-blue-gray-400 mt-28'>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>The
          </div>
          <h1 className="uppercase text-[35px] md:text-[55px] lg:text-[70px] leading-[1.1] font-semibold mb-4">College Mart<br />
            <span className="font-light">one stop solution</span></h1>
          <Link to={'/'} className='uppercase font-semibold border-b-2 border-primary mt-4'>Discover More</Link>
        </div>
      </div>
      <div className='text-white w-full flex flex-col items-center'>
        <section className="bg-gray-100 py-12 w-full">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800">About Our College E-commerce</h2>
              <p className="text-lg text-gray-600 mt-4">
                Empowering Students and Staff with Easy Access to College Merchandise and Services
              </p>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-1/2 px-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Our college e-commerce platform aims to provide a convenient and efficient way for students, faculty, and staff to access and purchase college-related merchandise and services.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We offer a wide range of products, including textbooks, college apparel, and accessories, as well as services such as event tickets and digital resources.
                </p>
                <p className="text-lg text-gray-600">
                  Our goal is to enhance the college experience by making essential items easily accessible and affordable, promoting a sense of community and college spirit.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <AutoPlay />
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
