import React, { useState, useEffect } from "react";
import { createContext } from 'react';
import axios from "axios";

export const VisitorContext = createContext(null)

const App = () => {
  const [visitorId, setVisitorId] = useState();

  const getVisitorId = () => {
    const url = "https://enrichment-free-tool.herokuapp.com/visitors";
    const config = { headers: { "Content-Type": "application/x-www-form-urlencoded" }};
    if(localStorage.getItem("visitor_id")) {
      setVisitorId(localStorage.getItem("visitor_id"))
    } else {
      axios
      .post(url, {}, config)
      .then(res => {
        console.log(res);
        localStorage.setItem("visitor_id", res.data);
        setVisitorId(res.data)
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }

  useEffect(() => {
    getVisitorId();
  }, []);

  return (
    <VisitorContext.Provider value={{ visitorId, setVisitorId }}>
      <div className="App">
        <h1>Enrichment 🛠</h1>
      </div>
    </VisitorContext.Provider>
  );
}

export default App;
