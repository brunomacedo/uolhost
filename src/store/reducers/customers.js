import { GET_CUSTOMERS, FETCH_ERROR } from '../actions/customers';

const INITIAL_STATE = {
  customers: [],
  fetchError: '',
};

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: payload,
        fetchError: '',
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetchError: payload,
      };
    default:
      return state;
  }
}
