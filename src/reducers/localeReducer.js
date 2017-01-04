// TODO move into src?
// TODO require.ensure these for each case?
import en from '../localizations/message.properties';
import fr from '../localizations/message_fr.properties';

const handlers = {};

const initialState = {
  localeCode: 'en',
  messages: en
};

export function locale(state = initialState, action) {
  const {type} = action;
  if (!handlers[type]) {
    return state;
  }
  return handlers[type](state, action.payload);
}

handlers.VARICENT__SET_LOCALE = (state, payload) => {
  const newState = {...state};
  newState.localeCode = payload.localeCode;
  if (payload.localeCode === 'en') {
    newState.messages = en;
  } else if (payload.localeCode === 'fr') {
    newState.messages = fr;
  } else {
    newState.messages = en;
  }
  return newState;
};
