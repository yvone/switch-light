const initialState = {
  lightIsOn: false,
  color: "#FFFF00",
  isLoading: false,
  hasError: false
};

const switchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TURN_ON": {
      return {
        ...state,
        lightIsOn: true
      };
    }
    case "TURN_ON_COLOR_LIGHT_LOADING": {
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    }
    case "TURN_ON_COLOR_LIGHT": {
      return {
        ...state,
        lightIsOn: true,
        color: action.payload,
        isLoading: false,
        hasError: false
      };
    }
    case "TURN_ON_COLOR_LIGHT_ERROR": {
      return {
        ...state,
        isLoading: false,
        hasError: true
      };
    }
    case "TURN_OFF": {
      return {
        ...state,
        lightIsOn: false
      };
    }
    case "TOOGLE": {
      return {
        ...state,
        lightIsOn: !state.lightIsOn
      };
    }
    default: {
      return state;
    }
  }
};

export default switchReducer;
