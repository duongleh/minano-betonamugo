import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as UI from 'actions/UI';

function SignUp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UI.updateMenuKey(3));
  }, [dispatch]);

  return <div>SignUp</div>;
}

export default SignUp;
