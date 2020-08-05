const reducer = (
  state = {
    buttonState: null 
  },
  action
) => {
  switch (action.type) {
    case 'UPDATE_BUTTON_STATE':
      state = { ...state, 
        buttonState: action.buttonState, 
      }
      break

    default:
      break
  }

  return state
};

export default reducer