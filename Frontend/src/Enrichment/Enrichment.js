import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { TryEnrichmentForFreeBtn, RequestDemoBtn } from '../Buttons/Buttons';

const Enrichment = () => {
  return (
    <EnrichmentContainer>
      <HeroContainer>
        <Tagline>Automatically enrich your records and workflows</Tagline>
        <Description>Shorten sign-up forms, improve lead scoring, and simply save your team time.</Description>
        <HeroCTAs>
          <Link to="/free-tool"><TryEnrichmentForFreeBtn>Try Enrichment for Free</TryEnrichmentForFreeBtn></Link>
          <RequestDemoBtn>Request a demo</RequestDemoBtn>
        </HeroCTAs>
      </HeroContainer>
    </EnrichmentContainer>
  );
};

const EnrichmentContainer = styled.div`
  margin: 100px auto 0 auto;
`;
const HeroContainer = styled.section`
  max-width: 1220px;
  margin: 0 auto;
  padding-top: 40px;
`;
const Tagline = styled.h1`
  margin: 0 auto;
  font-size: 40px;
  font-family: "lato";
  max-width: 600px;
  text-align: center;
`;

const Description = styled.h2`
  padding-top: 20px;
  margin: 0 auto;
  font-size: 16px;
  font-family: "lato";
  max-width: 400px;
  text-align: center;
`;

const HeroCTAs = styled.div`
  padding-top: 40px;
  display: flex;
  margin: 0 auto;
  max-width: 320px;
  justify-content: space-between;
`



export default Enrichment;
