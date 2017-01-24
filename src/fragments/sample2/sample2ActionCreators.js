export function createActionCreators(actionTypes) {
  function clickButton2() {
    return dispatch => {
      dispatch({
        type: actionTypes.CLICK_BUTTON_2,
        payload: {
        }
      });
    };
  }

  return {
    clickButton2
  };
}
