import PropTypes from "prop-types";
import Styles from "./Section.module.css";
const Section = ({ title, children }) => {
  return (
    <>
      <section>
        <h2 className={Styles.title}>{title}</h2>
        {children}
      </section>
    </>
  );
};
Section.defaultProps = {
  title: "",
  children: [],
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
