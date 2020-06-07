export const MENUKEY = 'MENUKEY';

export const updateMenuKey = (MenuKey) => async (dispatch) => {
  dispatch({
    type: MENUKEY,
    MenuKey: MenuKey.toString()
  });
};
