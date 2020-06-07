import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as UI from 'actions/UI';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UI.updateMenuKey(1));
  }, [dispatch]);

  return <div>home</div>;
}

export default Home;
