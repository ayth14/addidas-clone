import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Statement = styled.div`
  color: black;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const Summary = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  p {
    margin: 0;
  }
`;

const CTAs = styled.div`
  display: flex;
  justify-content: center;
`;

const CTAWrapper = styled.div`
  margin: 0.5rem;
`;

const CTAButton = styled.a`
  display: flex;
  align-items: center;
  background-color: #000;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition: color 0.3s;
  position: relative;
  &:hover {
    color: #444;
  }

  &:before {
    content: "";
    position: absolute;
    display: block;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    bottom: -3px;
    height: 3px;
    left: 3px;
    width: 100%;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    height: 100%;
    right: -3px;
    top: 3px;
    width: 3px;
  }
`;

const IconWrapper = styled.span`
  margin-left: 0.5rem;
`;

const AdiclubSection = () => {
  return (
    <Wrapper>
      <Statement>
        <Title>ADICLUB DAYS ARE BACK</Title>
        <Summary data-auto-id="statement-summary">
          <p>Experience it all</p>
        </Summary>
        <CTAs>
          <CTAWrapper>
            <CTAButton
              href="/adiclubdays"
              data-tracking-link="SLOT-2-_-adiclubdays-fw24-PLP-statement-206393-_-FIND-OUT-MORE-_-statement-206393-_-statement-206392"
            >
              <span>FIND OUT MORE</span>
              <IconWrapper aria-hidden="true">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </IconWrapper>
            </CTAButton>
          </CTAWrapper>
        </CTAs>
      </Statement>
    </Wrapper>
  );
};

export default AdiclubSection;
