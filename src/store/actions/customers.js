import { APIResquest } from '../../utils/api';

export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const FETCH_ERROR = 'FETCH_ERROR';

export function loadCustomers() {
  return async (dispatch) => {
    await APIResquest({
      uri: 'customers',
      method: 'GET',
    })
      .then(({ data }) => dispatch({
        type: GET_CUSTOMERS,
        payload: data,
      }))
      .catch(err => dispatch({
        type: FETCH_ERROR,
        payload: err,
      }));
  };
}

export function addCustomer(data) {
  return dispatch => dispatch({
    type: ADD_CUSTOMER,
    payload: data,
  });
}

export function updateCustomer(data) {
  return dispatch => dispatch({
    type: UPDATE_CUSTOMER,
    payload: data,
  });
}
