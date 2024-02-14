export const initialState = {
    clientName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    checked: false,
    errors: {
      clientName: "",
      email: "",
      phone: "",
      password: "",
      address: "",
      city: "",
    },
    successMsg: "",
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          [action.field]: action.value,
          errors: { ...state.errors, [action.field]: "" },
          successMsg: "",
        };
      case "TOGGLE_CHECKED":
        return {
          ...state,
          checked: !state.checked,
        };
      case "SET_ERROR":
        return {
          ...state,
          errors: { ...state.errors, [action.field]: action.message },
        };
      case "SET_SUCCESS_MSG":
        return {
          ...state,
          successMsg: action.message,
        };
      case "RESET_FIELDS":
        return {
          ...state,
          clientName: "",
          email: "",
          phone: "",
          password: "",
          address: "",
          city: "",
        };
      default:
        return state;
    }
  };