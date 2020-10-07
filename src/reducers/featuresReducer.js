import {
  ADD_NEW_FEATURES,
  DELETE_NEW_FEATURES,
} from "../actions/featuresActions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const featuresReducer = (state = initialState, action) => {
  console.log("my reducer state, action", state, action);
  switch (action.type) {
    case ADD_NEW_FEATURES:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.newFeaturesPrice,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            {
              id: action.payload,
              name: action.newFeaturesName,
              price: action.newFeaturesPrice,
            },
          ],
        },
      };

    case DELETE_NEW_FEATURES:
      console.log("actionpayload", action.newFeaturesPrice);
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.newFeaturesPrice,
        car: {
          ...state.car,
          features: state.car.features.filter(
            (item) => item.id !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

//This code might work to remove the additional features from UI options so you can only add this feature once
// additionalFeatures: state.additionalFeatures.filter(
//   (item) => item.id !== action.payload.id
// ),
