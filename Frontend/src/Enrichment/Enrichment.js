import React from "react";
import { Link } from "react-router-dom";

const Enrichment = () => {
  return (
    <>
      <h1>Enrichment 🛠</h1>
      <Link to="/free-tool">
        <button>Try Enrichment for Free</button>
      </Link>
    </>
  );
};

export default Enrichment;
