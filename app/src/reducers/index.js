import { GET_START, START_SUCCESS, START_ERROR } from '../actions';


const initialState = {
    weather: {},
    isGetting: false,
    error: ''
  }
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case(GET_START):
        return({
          ...state,
          weather: {},
          isGetting:true,
          error:''
        });
      case(START_SUCCESS):
        return({
          ...state,
          weather: action.payload,
          isGetting: false,
          error: ''
        });
      case(START_ERROR):
        return({
          ...state,
          weather:{},
          isGetting: false,
          error: action.payload
        })
      default:
        return state;
    }
};
 
export default reducer