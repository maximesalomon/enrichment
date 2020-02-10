import React, { useState, useContext } from "react";
import axios from "axios";
import { VisitorContext } from "../App";

const FreeTool = () => {
  const visitor_id = useContext(VisitorContext);
  const [data, setData] = useState();
  const handleChange = event => {
    setData(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const url = "https://enrichment-free-tool.herokuapp.com/requests";
    const config = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    };
    axios
      .post(url, {
        visitor_id: '65eab2fc-b609-4180-ab6f-bea31c523a6c',
        type: 'email',
        data: 'maxime@croissant.io'
      }, config)
      .then(res => {
       console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
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
