import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN,
  LOGIN_USER_FAILED,
  LOGGED_IN,
  NOT_LOGGED_IN
} from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: {},
  loading:false,
  error:'',  
  fullLoading:true,
};
export default (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload.user};
    case LOGIN:
      return {...state, loading: true, error: ''};
    case LOGIN_USER_FAILED:
      return {...state, loading: false, error: 'Authentication Failed'};
      case LOGGED_IN:
        return {...state, fullLoading:false, user: action.payload}
        case NOT_LOGGED_IN:
          return{...state,fullLoading:false}
    default:
      return state;
  }
};
