import axios from 'axios';
import { GOT_ALL_WIGS, GOT_SINGLE_WIG } from './index';

//ACTION CREATORS
export const gotWigs = wigs => ({
  type: GOT_ALL_WIGS,
  wigs
});

export const gotSingleWig = wig => ({
  type: GOT_SINGLE_WIG,
  wig
});

//THUNK CREATOR
export const getAllWigs = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/wigs');
      dispatch(gotWigs(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getSingleWig = wigId => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/wigs/${wigId}`);
      console.log('data', data);
      dispatch(gotSingleWig(data));
    } catch (error) {
      console.log(error);
    }
  };
};

//REDUCER
export default function wigs(state = [], action) {
  switch (action.type) {
    case GOT_ALL_WIGS:
      return action.wigs;
    case GOT_SINGLE_WIG:
      let existingWigs = [...state];
      console.log('existing', existingWigs);
      return existingWigs.filter(wig => action.wig[0].id === wig.id);

    // return action.wig; //this will currently delete all wigs and replace the array with just one element - need to refactor
    default:
      return state;
  }
}
