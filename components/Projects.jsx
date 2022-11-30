import React from 'react'
import IgImg2 from '../public/icon1.JPG';
import IgImg3 from '../public/icon2.JPG';
import IgImg4 from '../public/icon3.png';
import IgImg5 from '../public/icon4.JPG';
import IgImg6 from '../public/icon5.JPG';
import Projecticons from './Projecticons';

const Projects = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center' >
        <p className='text-2xl font-bold mb-10'>Innovative Execution</p>
        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 p-4'>
            <div>
               <Projecticons socialImg={IgImg2} />
               <h1 className='text-xl font-bold '>Featured Listing</h1>
               <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. </p>
            </div>

            <div>
               <Projecticons socialImg={IgImg3} />
               <h1>Available Properties</h1>
               <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.  </p>
            </div>

            <div>
               <Projecticons socialImg={IgImg4} />
               <h1>In the News</h1>
               <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>
  )
}

export default Projects