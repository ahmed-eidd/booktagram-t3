import { actionTypes } from './slice';


export const changeLocaleAction = (locale) => ({
  type: actionTypes.CHANGE_LOCALE,
  payload: locale
})