import React, { useState } from "react";

const FreeTool = () => {
  const [data, setData] = useState();

  const handleChange = event => {
    setData(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Enrichment Free Tool 🛠</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <input onChange={event => handleChange(event)}></input>
        <button>Enrich</button>
      </form>
    </>
  );
};

export default FreeTool;
