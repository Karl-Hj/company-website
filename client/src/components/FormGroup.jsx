import PropTypes from "prop-types";

export function FormGroup({ children, errorMessage }) {
  return (
    <div className="form-row">
      {children}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string,
};
