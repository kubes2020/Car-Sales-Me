//action type
export const ADD_NEW_FEATURES = "ADD_NEW_FEATURES";
//action creator
export const addNewFeatures = (
  newFeaturesId,
  newFeaturesName,
  newFeaturesPrice
) => {
  console.log(
    "action feature id/name/price is invoked",
    newFeaturesId,
    newFeaturesName,
    newFeaturesPrice
  );
  //returns action object
  return {
    type: ADD_NEW_FEATURES,
    payload: newFeaturesId,
    newFeaturesName,
    newFeaturesPrice,
  };
};


export const DELETE_NEW_FEATURES = "DELETE_NEW_FEATURES";

export const deleteNewFeatures = (
  newFeaturesId,
  newFeaturesName,
  newFeaturesPrice
) => {
  return {
    type: DELETE_NEW_FEATURES,
    payload: newFeaturesId,
    newFeaturesName,
    newFeaturesPrice,
  };
};
