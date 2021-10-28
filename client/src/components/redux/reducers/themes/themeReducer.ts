import { AllActions } from '../../actions'
import { IsDark } from '../../types'

const initState = {
  theme: false,
}

const themeReducer = (state: IsDark = initState, action: AllActions) => {
  //  const theme = this.state.theme ? this.state.theme : "CHANGE_TO_Dark";
  if (action.type === 'TOGGLETHEME') {
    return {
      ...state,
      theme: !state.theme,
    }
  }
  return state

  // switch (action.type) {
  //   case 'CHANGE_TO_LIGHT':
  //     return {
  //       ...state,
  //       theme: 'light',
  //     }

  //   case 'CHANGE_TO_DARK':
  //     return {
  //       ...state,
  //       theme: 'dark',
  //     }

  //   default:
  //     return state
  // }
}

export default themeReducer
