import { APIResquest } from '../../utils/api';

export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const FETCH_ERROR = 'FETCH_ERROR';

export function loadCustomers() {
  return async (dispatch) => {
    await APIResquest({
      uri: 'customers',
      method: 'GET',
    })
      .then(({ data }) => dispatch({
        type: GET_CUSTOMERS, payload: data,
      }))
      .catch(err => dispatch({ type: FETCH_ERROR, payload: err }));
  };
}
