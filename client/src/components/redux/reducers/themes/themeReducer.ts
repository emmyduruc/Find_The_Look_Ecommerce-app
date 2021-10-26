import { AllActions } from '../../actions'

const initState = {
  theme: 'light',
}

const themeReducer = (state = initState, action: AllActions) => {
  //  const theme = this.state.theme ? this.state.theme : "CHANGE_TO_Dark";

  switch (action.type) {
    case 'CHANGE_TO_LIGHT':
      return {
        ...state,
        theme: 'light',
      }

    case 'CHANGE_TO_DARK':
      return {
        ...state,
        theme: 'dark',
      }

    default:
      return state
  }
}

export default themeReducer
