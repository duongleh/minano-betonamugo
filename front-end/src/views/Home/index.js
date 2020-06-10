import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as UI from 'actions/UIAction';
import Carou from 'components/Carousel';
import ListCourse from 'components/ListCourse';

function Home() {
  const dispatch = useDispatch();
  const LoginStatus = useSelector((state) => state.LoginStatus);

  useEffect(() => {
    dispatch(UI.updateMenuKey(1));
  }, [dispatch]);

  return (
    <div>
      {/* TODO false is admin */}
      {LoginStatus.role ? (
        <></>
      ) : (
        <Redirect
          to={{
            pathname: '/admin'
          }}
        />
      )}
      <Carou />
      <ListCourse />
    </div>
  );
}

export default Home;
