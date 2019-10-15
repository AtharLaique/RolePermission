export const auth = (data, history) => dispatch => {
  if (data.name == "admin@gmail.com" && data.password == "admin") {
    dispatch({
      type: "AUTH",
      payload: true
    });
    history.push("/admin/home");
  } else {
    dispatch({
      type: "ERROR",
      payload: true
    });
  }
};
