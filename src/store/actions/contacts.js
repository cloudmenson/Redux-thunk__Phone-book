import { post, get, deleteReq } from "../../components/api/api";
const API_URL = "https://6256c2666ea70370053ed89c.mockapi.io/contacts/";

export const ACTION_ADD_CONTACT = "ACTION_ADD_CONTACT";
export function addContact(payload) {
  return function (dispatch) {
    post(API_URL, {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      completed: false,
    }).then((date) => {
      dispatch({
        type: ACTION_ADD_CONTACT,
        payload: date,
      });
    });
  };
}

export const ACTION_DELETE_CONTACT = "ACTION_DELETE_CONTACT";
export function deleteContact(payload) {
  return function (dispatch) {
    deleteReq(API_URL + payload).then((date) => {
      dispatch({
        type: ACTION_DELETE_CONTACT,
        payload: date.id,
      });
    });
  };
}

export const ACTION_FETCH_CONTACTS = "ACTION_FETCH_CONTACTS";
export function fetchContacts() {
  return function (dispatch) {
    get(API_URL).then((date) => {
      dispatch({
        type: ACTION_FETCH_CONTACTS,
        payload: date,
      });
    });
  };
}
