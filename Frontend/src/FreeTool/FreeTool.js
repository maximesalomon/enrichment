import React, { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { VisitorContext } from "../App";

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
    const url = "https://enrichment-free-tool.herokuapp.com/requests";
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

  const RequestData = () => {
    return (
      <RequestDataContainer>
        <PersonHeader>
          <Avatar src={request.person.avatar} />
          <EnrichmentText>
            enrichment<EnrichmentEmail>{request.person.email}</EnrichmentEmail>
          </EnrichmentText>
        </PersonHeader>
        <PersonInfos>
          <p>Name: {request.person.name.fullName}</p><br/>
          <p>Bio: {request.person.bio}</p><br/>
          <p>Email: {request.person.email}</p><br/>
          <p>
            Employment: {request.person.employment.title} at{" "}
            {request.person.employment.name}
          </p><br/>
          <p>Location: {request.person.location}</p><br/>
          <p>Website: {request.person.site}</p><br/>
          <p>Github: {request.person.github.handle}</p><br/>
          <p>Twitter: {request.person.twitter.handle}</p><br/>
          <p>Facebook: {request.person.facebook.handle}</p><br/>
          <p>Linkedin: {request.person.linkedin.handle}</p><br/>
        </PersonInfos>
      </RequestDataContainer>
    );
  };

  const leadSubmit = event => {
    event.preventDefault();

    const url = `https://enrichment-free-tool.herokuapp.com/visitors/${visitor.visitorId}`;
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
                {leadConfirmation}
              </RequestDataContainer>
            </>
          ) : (
            <RequestData />
          )}
        </EnrichData>
      </EnrichContainer>
    </FreeToolContainer>
  );
};

const PersonHeader = styled.div`
  padding-left: 20px;
  display: flex;
`;
const Avatar = styled.img`
  border-radius: 6px;
  height: 50px;
  width: 50px;
  padding: 10px;
`;

const EnrichmentText = styled.div`
  padding-top: 14px;
  font-size: 18px;
  color: grey;
  display: flex;
`;

const EnrichmentEmail = styled.p`
  color: black;
  padding-left: 4px;
`;

const PersonInfos = styled.div`
  margin-top: 40px;
  padding-left: 20px;
`;

const FreeToolContainer = styled.section`
  padding-top: 120px;
  max-width: 1200px;
  margin: 0 auto;
`;

const EnrichContainer = styled.div`
  padding: 80px;
  max-width: 1080px;
  margin: 0 auto;
  border: 6px solid #0088f6;
  border-radius: 8px;
  background-color: #f4f6f8;
`;

const EnrichForm = styled.form`
  max-width: 800px;
  margin: 0 auto;
`;

const EnrichInput = styled.input`
  padding: 10px;
  width: 662px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  color: #1e2125;
  font-size: 18px;
  font-family: "Lato", Helvetica, Arial, sans-serif;
  background-color: #fff;
  box-shadow: 0px 3px 7px 0px rgba(225, 227, 229, 0.55), 0px 1px 2px 0px #e1e3e5;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const EnrichData = styled.div`
  margin: 40px auto;
  max-width: 800px;
  border-radius: 8px;
  outline: none;
  color: #1e2125;
  font-family: "Lato", Helvetica, Arial, sans-serif;
  background-color: #fff;
  box-shadow: 0px 3px 7px 0px rgba(225, 227, 229, 0.55), 0px 1px 2px 0px #e1e3e5;
`;

const DefaultDataContainer = styled.div`
  padding: 100px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const DefaultDataTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const RequestDataContainer = styled.div`
  padding: 40px;
  max-width: 800px;
`;

const LeadCapture = styled.div`
  padding-top: 40px;
  display: flex;
`;

const LeadCaptureForm = styled.form`
  display: flex;
`;

const LeadCaptureInput = styled.input`
  width: 320px;
  height: 56px;
  font-size: 16px;
  margin-right: 20px;
`;

const Or = styled.p`
  padding: 20px;
`;

export default FreeTool;
