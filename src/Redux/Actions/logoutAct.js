export const logout = ( history) => dispatch => {

  dispatch({
    type: "AUTH",
    payload: false
  });
};
