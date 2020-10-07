import React from "react";
import { connect } from "react-redux";
import { deleteNewFeatures } from "../actions/featuresActions";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() =>
          props.deleteNewFeatures(
            props.feature.id,
            props.feature.name,
            props.feature.price
          )
        }
        className="button"
      >
        X
      </button>
      {props.feature.name}
      {props.feature.price}
    </li>
  );
};

// export default AddedFeature

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  };
};

export default connect(mapStateToProps, { deleteNewFeatures })(AddedFeature);
