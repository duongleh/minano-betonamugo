import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as UI from 'actions/UI';

function SignIn() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UI.updateMenuKey(2));
  }, [dispatch]);

  return <div>SignIn</div>;
}

export default SignIn;
