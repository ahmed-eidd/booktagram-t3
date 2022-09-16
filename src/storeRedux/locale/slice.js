export const actionTypes = {
  CHANGE_LOCALE:'CHANGE_LOCALE',
}

const initialState = {
  locale: 'AR'
};

const localeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHANGE_LOCALE: {
      return {
        ...state,
        locale: payload
      }
    }
   
    default:
      return state;
  }
};

export default localeReducer