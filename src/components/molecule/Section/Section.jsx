import PropTypes from "prop-types";
import { Wrapper } from "./Section.style";
import theme from "./../../../theme/theme";

const Section = children => {
  return <Wrapper theme={theme}>{children}</Wrapper>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
