import React from "react";
import { Link } from "react-router-dom";

const PageError = () => {
  return <React.Fragment>
    <section>
      <p>404 Page Not Found</p>
      <Link to="/">Back to main page</Link>
    </section>
  </React.Fragment>;
};

export default PageError;
