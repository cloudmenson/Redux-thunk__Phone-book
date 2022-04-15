import {
  ACTION_ADD_CONTACT,
  ACTION_DELETE_CONTACT,
  ACTION_FETCH_CONTACTS,
} from "../actions/contacts";

const initialState = {
  contacts: [],
};
export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_FETCH_CONTACTS:
      return { ...state, contacts: payload };
    case ACTION_ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case ACTION_DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
}
