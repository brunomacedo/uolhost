import {
  GET_CUSTOMERS,
  ADD_CUSTOMER,
  UPDATE_CUSTOMER,
  FETCH_ERROR,
} from '../actions/customers';

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
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, payload],
        fetchError: '',
      };
    case UPDATE_CUSTOMER:
      return {
        ...state,
        customers: [
          ...state.customers.filter(({ _id: customerID }) => {
            const { _id: payloadID } = payload;
            return (
              customerID !== payloadID
            );
          }),
          payload,
        ],
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
