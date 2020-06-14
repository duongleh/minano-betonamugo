import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as UI from 'actions/UIAction';
import Carou from 'components/Carousel';
import ListCourse from 'components/ListCourse';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UI.updateMenuKey(1));
  }, [dispatch]);

  return (
    <div>
      <Carou url='https://img-a.udemycdn.com/notices/home_banner/image_udlite/7cf844b2-4371-45ea-9ef5-e10ea212eac2.jpg' />
      <ListCourse />
    </div>
  );
}

export default Home;
