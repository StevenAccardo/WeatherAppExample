import { FETCH_WEATHER } from '../actions/index';
//The action is data that was converted from a promise into a JS Object by the Redux-promise middleware.
//Default value of the state argument set to an empty array instead of null because we know we are going to be dealing with arrays
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      //Never mutate the state in Redux, instead we return an entirely new instance of state with whatever we need changed or added.

      //This is one way to return an entirely new piece of state with the added information. The concat() method makes a copy of the original state and adds on the new portion, and then returns that. It doens't actually alter the original state array like the push() method would.
      //return state.concat([action.payload.data]);

      //However, this is an even better way of accomplishing the same thing, using the spread operator from es6
      //This reads as, create a new array, add in our new info, and then take the array stored in state and add it to our new array, but flatten it all out, so that it is one single array.
      return [ action.payload.data, ...state ];

  }
  return state;
};
