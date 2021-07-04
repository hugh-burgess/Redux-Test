export const ACTION = "ACTION";
export const takeAction = () => async (dispatch, getState) => {
  // const API = recieveAPIHere()
  dispatch({
    type: ACTION,
    //    payload:
    // API or else
    // 0,
    count: 1,
  });
};
