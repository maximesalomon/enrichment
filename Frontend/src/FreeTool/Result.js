import React from "react";
import {
  RequestDataContainer,
  PersonHeader,
  Avatar,
  EnrichmentText,
  EnrichmentEmail,
  PersonInfos,
  DataBloc,
  InfosData,
  SocialData,
  CategoryText,
  DataText
} from "./FreeToolStyle";

const Result = ({ request }) => {
  return (
    <RequestDataContainer>
      <PersonHeader>
        {request.person.avatar ? <Avatar src={request.person.avatar} /> : null}
        <EnrichmentText>
          enrichment<EnrichmentEmail>{request.person.email}</EnrichmentEmail>
        </EnrichmentText>
      </PersonHeader>
      <PersonInfos>
        <InfosData>
          {request.person.name.fullName ? (
            <DataBloc>
              <CategoryText>Name</CategoryText>
              <DataText>{request.person.name.fullName}</DataText>
            </DataBloc>
          ) : null}
          {request.person.bio ? (
            <DataBloc>
              <CategoryText>Bio</CategoryText>
              <DataText>{request.person.bio}</DataText>
            </DataBloc>
          ) : null}
          {request.person.email ? (
            <DataBloc>
              <CategoryText>Email</CategoryText>
              <DataText> {request.person.email}</DataText>
            </DataBloc>
          ) : null}
          {request.person.employment.title && request.person.employment.name ? (
            <DataBloc>
              <CategoryText>Employment</CategoryText>
              <DataText>
                {" "}
                {request.person.employment.title} at{" "}
                {request.person.employment.name}
              </DataText>
            </DataBloc>
          ) : null}
          {request.person.employment.role ? (
            <DataBloc>
              <CategoryText>Role</CategoryText>
              <DataText>{request.person.employment.role}</DataText>
            </DataBloc>
          ) : null}
          {request.person.employment.seniority ? (
            <DataBloc>
              <CategoryText>Seniority</CategoryText>
              <DataText>{request.person.employment.seniority}</DataText>
            </DataBloc>
          ) : null}
          {request.person.location ? (
            <DataBloc>
              <CategoryText>Location</CategoryText>
              <DataText> {request.person.location}</DataText>
            </DataBloc>
          ) : null}
        </InfosData>
        <SocialData>
          {request.person.site ? (
            <DataBloc>
              <CategoryText>Website</CategoryText>
              <DataText> {request.person.site}</DataText>
            </DataBloc>
          ) : null}
          {request.person.github.handle ? (
            <DataBloc>
              <CategoryText>Github</CategoryText>
              <DataText> {request.person.github.handle}</DataText>
            </DataBloc>
          ) : null}
          {request.person.twitter.handle ? (
            <DataBloc>
              <CategoryText>Twitter</CategoryText>
              <DataText> {request.person.twitter.handle}</DataText>
            </DataBloc>
          ) : null}
          {request.person.facebook.handle ? (
            <DataBloc>
              <CategoryText>Facebook</CategoryText>
              <DataText> {request.person.facebook.handle}</DataText>
            </DataBloc>
          ) : null}
          {request.person.linkedin.handle ? (
            <DataBloc>
              <CategoryText>Linkedin</CategoryText>
              <DataText> {request.person.linkedin.handle}</DataText>
            </DataBloc>
          ) : null}
        </SocialData>
      </PersonInfos>
      {/* <CompanyInfos></CompanyInfos> TODO */}
    </RequestDataContainer>
  );
};

export default Result;
