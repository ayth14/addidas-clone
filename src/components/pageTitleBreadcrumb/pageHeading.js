import React from "react";
import styled from "styled-components";

const HeadingWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 30px 0;
  color: #333;

  @media (max-width: 992px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Count = styled.span`
  font-size: 1.5rem;
  color: #666;
`;

const PageHeading = ({ title, count }) => {
  return (
    <HeadingWrapper>
      <Title>{title}</Title>
      <Count>[{count}]</Count>
    </HeadingWrapper>
  );
};

export default PageHeading;
