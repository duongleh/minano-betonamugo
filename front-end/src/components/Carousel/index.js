import React from 'react';
import { Carousel } from 'antd';

import './index.css';

function Carou({ url }) {
  return (
    <Carousel autoplay className='caurousel'>
      <div>
        <img className='image_size' src={url} alt='' />
      </div>
    </Carousel>
  );
}

export default Carou;
