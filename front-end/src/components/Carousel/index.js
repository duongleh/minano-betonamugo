import React from 'react';
import { Carousel } from 'antd';

import './index.css';

function Carou() {
  return (
    <Carousel autoplay className='caurousel'>
      <div>
        <img
          src={
            'https://img-a.udemycdn.com/notices/home_banner/image_udlite/7cf844b2-4371-45ea-9ef5-e10ea212eac2.jpg'
          }
          alt=''
        />
      </div>
    </Carousel>
  );
}

export default Carou;
