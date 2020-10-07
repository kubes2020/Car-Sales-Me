//action type
export const ADD_NEW_FEATURES = "ADD_NEW_FEATURES";
//action creator
export const addNewFeatures = (
  newFeaturesId,
  newFeaturesName,
  newFeaturesPrice
) => {
  console.log(
    "action feature id/name is invoked",
    newFeaturesId,
    newFeaturesName
  );
  return {
    type: ADD_NEW_FEATURES,
    payload: newFeaturesId,
    newFeaturesName,
    newFeaturesPrice,
  };
};
