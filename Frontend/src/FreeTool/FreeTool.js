import React, { useState, useContext } from "react";
import axios from "axios";
import { VisitorContext } from "../App";

import Result from "./Result";

import {
  RequestDataContainer,
  DefaultDataContainer,
  FreeToolContainer,
  EnrichContainer,
  LeadCapture,
  LeadCaptureForm,
  LeadCaptureInput,
  EnrichForm,
  Or,
  LeadConfirmation,
  EnrichInput,
  DefaultDataTitle,
  EnrichData
} from "./FreeToolStyle";

import {
  EnrichBtn,
  RequestDemoBtn,
  TryEnrichmentForFreeBtn
} from "../Buttons/Buttons";

const qs = require("query-string");

const FreeTool = () => {
  const visitor = useContext(VisitorContext);

  const [data, setData] = useState("");
  const [lead, setLead] = useState("");
  const [request, setRequest] = useState(null);
  const [leadConfirmation, setLeadConfirmation] = useState(null);

  const requestChange = event => {
    setData(event.target.value);
  };

  const leadChange = event => {
    setLead(event.target.value);
  };

  const requestSubmit = event => {
    event.preventDefault();
    const url =
      process.env.NODE_ENV === "production"
        ? `https://enrichment-free-tool.herokuapp.com/requests`
        : `http://localhost:7000/requests`;
    const config = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    };
    const requestBody = {
      visitor_id: visitor.visitorId,
      type: "email",
      data: data
    };
    axios
      .post(url, qs.stringify(requestBody), config)
      .then(res => {
        setRequest(res.data);
        setData("");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const DefaultData = () => {
    return (
      <DefaultDataContainer>
        <DefaultDataTitle>Enrichment Free Tool</DefaultDataTitle>
        <p>Enter an email to get a taste of what Clearbit has to offer.</p>
      </DefaultDataContainer>
    );
  };

  const leadSubmit = event => {
    event.preventDefault();

    const url =
      process.env.NODE_ENV === "production"
        ? `https://enrichment-free-tool.herokuapp.com/visitors/${visitor.visitorId}`
        : `http://localhost:7000/visitors/${visitor.visitorId}`;
    const config = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    };
    const requestBody = {
      email: lead
    };
    axios
      .put(url, qs.stringify(requestBody), config)
      .then(res => {
        setLead("");
        setLeadConfirmation(
          "Thanks! We just sent you more informations on Clearbit Enrichment."
        );
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <FreeToolContainer>
      <EnrichContainer>
        <EnrichForm onSubmit={event => requestSubmit(event)}>
          <EnrichInput
            value={data}
            placeholder="Enter an email..."
            onChange={event => requestChange(event)}
          ></EnrichInput>
          <EnrichBtn>Enrich</EnrichBtn>
        </EnrichForm>
        <EnrichData>
          {request === null ? (
            <DefaultData />
          ) : request === "You have used your 5 free credits!" ? (
            <>
              <RequestDataContainer>
                <p>{request}</p>
                <LeadCapture>
                  <LeadCaptureForm onSubmit={event => leadSubmit(event)}>
                    <LeadCaptureInput
                      value={lead}
                      placeholder="Enter your email..."
                      onChange={event => leadChange(event)}
                    ></LeadCaptureInput>
                    <TryEnrichmentForFreeBtn>
                      Learn more
                    </TryEnrichmentForFreeBtn>
                  </LeadCaptureForm>
                  <Or>or</Or>
                  <RequestDemoBtn>Request a Demo</RequestDemoBtn>
                </LeadCapture>
                <LeadConfirmation>{leadConfirmation}</LeadConfirmation>
              </RequestDataContainer>
            </>
          ) : (
            <Result request={request} />
          )}
        </EnrichData>
      </EnrichContainer>
    </FreeToolContainer>
  );
};

export default FreeTool;
