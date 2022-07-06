const initialState = {
  name: "",
  image: null,
  description: "",
  category:"",
  type:"",
  small: 0,
  medium: 0,
  large: 0,
  price: 0,
  collar: 0,
  length: 0,
  chest: 0,
  waist: 0,
  sleeveLength: 0,
  acrossShoulder: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
