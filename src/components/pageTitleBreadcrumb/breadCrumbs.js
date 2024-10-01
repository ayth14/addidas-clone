import React from "react";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import styled from "styled-components";

const BreadcrumbContainer = styled.ol`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  list-style: none;
  margin: 0;
  font-size: 14px;

    @media (max-width: 992px) {
    display: none;
  }
`;

const BreadcrumbItem = styled.li`
  margin-right: 8px;

  a,
  span {
    text-decoration: underline;
    color: #000;
    cursor: pointer;
  }

  &:last-child span {
    color: #000;
    cursor: default;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 14px;
    color: #000;
  }

  svg {
    margin-right: 4px;
    width: 16px;
    height: 16px;
  }
`;

const BreadCrumbs = ({onBackClick, breadcrumbItems}) => {
  return (
    <BreadcrumbContainer>
      <li>
        <BackButton onClick={onBackClick} aria-label="Back">
          <span aria-hidden="true">
            <HiMiniArrowUturnLeft />
          </span>
          <span>Back</span>
        </BackButton>
      </li>
      {breadcrumbItems.map((breadcrumb, index) => (
        <BreadcrumbItem
          key={index}
        >
          {breadcrumb.link ? (
            <a
              href={breadcrumb.link}
              itemid={breadcrumb.link}
            >
              <span>{breadcrumb.title}</span>
            </a>
          ) : (
            <span>{breadcrumb.title}</span>
          )}
          <meta content={index + 1} />
        </BreadcrumbItem>
      ))}
    </BreadcrumbContainer>
  );
};

export default BreadCrumbs;
