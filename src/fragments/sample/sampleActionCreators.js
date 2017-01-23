export function createActionCreators(actionTypes) {
  function clickButton() {
    return dispatch => {
      dispatch({
        type: actionTypes.CLICK_BUTTON,
        payload: {
        }
      });
    };
  }

  return {
    clickButton
  };
}
