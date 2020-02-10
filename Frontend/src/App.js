import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Enrichment from "../src/Enrichment/Enrichment";
import FreeTool from "../src/FreeTool/FreeTool";
import Navbar from "../src/Navbar/Navbar";

export const VisitorContext = createContext(null);

const App = () => {
  const [visitorId, setVisitorId] = useState();

  const getVisitorId = () => {
    const url = process.env.NODE_ENV === "production"
      ? `https://enrichment-free-tool.herokuapp.com/visitors`
      : `http://localhost:7000/visitors`
    const config = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    };
    if (localStorage.getItem("visitor_id")) {
      setVisitorId(localStorage.getItem("visitor_id"));
    } else {
      axios
        .post(url, {}, config)
        .then(res => {
          localStorage.setItem("visitor_id", res.data);
          setVisitorId(res.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getVisitorId();
  }, []);

  return (
    <VisitorContext.Provider value={{ visitorId }}>
      <Navbar />
      <Route exact path="/" component={Enrichment} />
      <Route exact path="/free-tool" component={FreeTool} />
    </VisitorContext.Provider>
  );
};

export default App;
