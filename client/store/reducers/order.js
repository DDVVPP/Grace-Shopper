import { PLACE_NEW_ORDER, PLACE_ORDER_ERROR } from './index';
import Axios from 'axios';
import history from '../../history';

//action creators
export const placeNewOrder = order => ({
  type: PLACE_NEW_ORDER,
  order
});

export const placeNewOrderError = error => ({
  type: PLACE_ORDER_ERROR,
  error
});

//thunk creators
export const placeOrderThunk = orderedItems => {
  return async dispatch => {
    try {
      console.log('ORDERED ITEMS', orderedItems);
      const { data } = await Axios.post('/api/orders', orderedItems);
      console.log('PLACE ORDER THUNK');
      history.push('/orderCompleted');

      // const idArray = cart.map(item => item.id);
      // const newCart = await Axios.put('/api/wigs/quantity', cart);
      // const newOrder = await Axios.post('/api/orders', orderedItems); // for updating line item associations down the line
      // // if (!newCart) //add some error message if newCart doesn't exist
      // dispatch(placeNewOrder(idArray));
    } catch (error) {
      dispatch(placeNewOrderError(error));
    }
  };
};

export default function neworder(state = [], action) {
  switch (action.type) {
    case PLACE_NEW_ORDER:
      return [];
    case PLACE_ORDER_ERROR:
      return action.error;

    default:
      return state;
  }
}
