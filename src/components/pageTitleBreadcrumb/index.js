import React from "react";
import styled from "styled-components";
import BreadCrumbs from "./breadCrumbs";
import PageHeading from "./pageHeading";

const TitleContain = styled.div`
  padding: 0 50px;
  margin-top: 30px;
  display: inline-block;
`;

const PageTitleBreadcrumb = ({
  breadcrumbs,
  title,
  productCount,
  onBackClick,
}) => {
  return (
    <TitleContain>
      <BreadCrumbs breadcrumbItems={breadcrumbs} onBackClick={onBackClick} />

      <PageHeading title={title} count={productCount} />
    </TitleContain>
  );
};

export default PageTitleBreadcrumb;
