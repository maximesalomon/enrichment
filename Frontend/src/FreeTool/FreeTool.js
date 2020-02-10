import React, { useState, useContext } from "react";
import axios from "axios";
import { VisitorContext } from "../App";

const qs = require("query-string");

const FreeTool = () => {
  const visitor = useContext(VisitorContext);
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
    const requestBody = {
      visitor_id: visitor.visitorId,
      type: 'email',
      data: data
    }
    axios
      .post(url, qs.stringify(requestBody), config)
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
