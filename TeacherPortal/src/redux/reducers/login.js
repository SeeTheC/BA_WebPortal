// @flow
export default function reducer(
  state: Object = {
    result: {}
  },
  action: Object
) {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return { ...state, result: action.payload };
    }
    case 'LOGIN_FAILED': {
      return { ...state };
    }
    default: {
      return state;
    }
  }
}
