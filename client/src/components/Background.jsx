import PropTypes from "prop-types";
export function Background({ children }) {
  return <div className="background-sheet">{children}</div>;
}

Background.propTypes = {
  children: PropTypes.node.isRequired,
};
