import React, { useState } from "react";
import tw from "tailwind-styled-components";
import {
  FilterButton,
  FilterSidebar,
  Header,
  Footer,
  AdiclubSection,
  CategorySlider,
  PageTitleBreadcrumb,
} from "@components";
import ProductList from "./ProductList";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MainContainer = tw.div`
  p-10
  relative
`;

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const productList = useSelector((state) => state.product.productList);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const breadCrumbItems = [
    { title: "Home", link: "/" },
    { title: "Outlet", link: null },
  ];

  const onBackClick = () => {
    navigate(-1);
  };
  return (
    <>
      
      <Header />

      <PageTitleBreadcrumb
        breadcrumbs={breadCrumbItems}
        onBackClick={onBackClick}
        title={"Shoes, Clothing & Accessories Sale: Up to 60% Off"}
        count={productList.length}
      />

      <CategorySlider />
      <MainContainer>
        <FilterButton toggleSidebar={toggleSidebar} />
        <FilterSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <ProductList />

        <AdiclubSection />
      </MainContainer>
      <Footer />

    </>
  );
};

export default Home;
