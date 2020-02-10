import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Enrichment = () => {
  return (
    <EnrichmentContainer>
      <HeroContainer>
        <h1>Enrichment 🛠</h1>
        <Link to="/free-tool">
          <button>Try Enrichment for Free</button>
        </Link>
      </HeroContainer>
    </EnrichmentContainer>
  );
};

const EnrichmentContainer = styled.div`
  margin: 100px auto 0 auto;
`
const HeroContainer = styled.section`
  max-width: 1220px;
  margin: 0 auto;
`

export default Enrichment;
