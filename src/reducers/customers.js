import { GET_CUSTOMERS } from '../actions/customers';

const INITIAL_STATE = {
  customers: [],
};

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        guias: payload,
        fetchError: '',
      };
    default:
      return state;
  }
}
