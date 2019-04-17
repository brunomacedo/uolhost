export const GET_CUSTOMERS = 'GET_CUSTOMERS';

export function loadCustomers() {
  return (
    {
      type: GET_CUSTOMERS,
      payload: [{ name: '' }],
    }
  );
}
