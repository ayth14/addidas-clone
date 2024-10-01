import React from "react";
import styled from "styled-components";
import menOutlet from "../../assets/images/category/in_men_outlet.avif";
import womenOutlet from "../../assets/images/category/in_women_outlet.avif";
import kidsOutlet from "../../assets/images/category/in_kids_outlet.avif";
import slides from "../../assets/images/category/in_outlet_slides.avif";
import summerWear from "../../assets/images/category/in_summer_wear.avif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";

const SliderContainer = styled.div`
  position: relative;
  z-index: 2;
  margin 20px 0;

`;

const SlideSectionBack = styled.div`
  position: absolute;
  bottom: 0;
  height: calc(100% - 80px);
  z-index: 0;
  width: 100%;
  background-color: rgb(37, 150, 190);
`;
const CarouselContain = styled.div``;

const Card = styled.div`
  width: 300px;
  padding: 0 0.5rem 0 0;
  overflow: hidden;
  position: relative;
  z-index: 10;
  &:hover{
    top: calc(20px * -1)
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardFooter = styled.div`
  padding: 16px;
  background-color: #f9f9f9;
`;

const CardTitle = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

const CategorySlider = () => {
  const categories = [
    {
      title: "MEN",
      href: "/men-outlet",
      imgSrc: menOutlet,
      alt: "Men's Outlet",
    },
    {
      title: "WOMEN",
      href: "/women-outlet",
      imgSrc: womenOutlet,
      alt: "Women's Outlet",
    },
    {
      title: "KIDS",
      href: "/kids-outlet",
      imgSrc: kidsOutlet,
      alt: "Kids' Outlet",
    },
    {
      title: "SLIDES",
      href: "/slides",
      imgSrc: slides,
      alt: "Slides",
    },
    {
      title: "SUMMER WEAR",
      href: "/summer_wear",
      imgSrc: summerWear,
      alt: "Summer Wear",
    },
  ];
  const settings = {
    slidesToShow: 7,
    slideToScroll: 2,
    infinite: false,
    margin: 50,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slideToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoints: 567,
        settings: {
          slidesToShow: 2,
          slideToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <SliderContainer>
      <Slider {...settings} className="z-[1] c">
        {categories.map((category, index) => (
          <Card>
            <CardImage src={category.imgSrc} alt={category.alt} />
            <CardFooter>
              <CardTitle href={category.href}>{category.title}</CardTitle>
            </CardFooter>
          </Card>
        ))}
      </Slider>

      <SlideSectionBack />
    </SliderContainer>
  );
};

export default CategorySlider;
