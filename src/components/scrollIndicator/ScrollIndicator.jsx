import { Link, ScrollLink } from "react-scroll";
import "./ScrollIndicator.css";

function ScrollIndicator() {
  return (
    <Link
      to="sobremi"
      smooth={true}
      duration={300}
      offset={-40}
      className="scroll-arrows"
    >
      <span></span>
      <span></span>
      <span></span>
    </Link>
  );
}

export default ScrollIndicator;
