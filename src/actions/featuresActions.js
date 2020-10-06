//action type
export const ADD_NEW_FEATURES = "ADD_NEW_FEATURES";
//action creator
export const addNewFeatures = (newFeaturesName) => {
  return { type: ADD_NEW_FEATURES, payload: newFeaturesName };
};
