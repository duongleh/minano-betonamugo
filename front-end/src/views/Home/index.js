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
      <Carou />
      <ListCourse />
    </div>
  );
}

export default Home;
