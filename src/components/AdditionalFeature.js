import React from "react";
import { addNewFeatures } from "../actions/featuresActions";
import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() =>
          props.addNewFeatures(
            props.feature.id,
            props.feature.name,
            props.feature.price
          )
        }
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// export default AdditionalFeature;
const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  };
};

export default connect(mapStateToProps, { addNewFeatures })(AdditionalFeature);
