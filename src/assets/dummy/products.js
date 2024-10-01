import product1 from "../images/products/Superstar_Shoes_Black_EG4957_01-1.avif";
import product1_1 from "../images/products/Superstar_Shoes_Black_EG4957_02-2.avif";
import product2 from "../images/products/Superstar_Shoes_Black_EG4959_01.avif";
import product2_1 from "../images/products/Superstar_Shoes_Black_EG4959_02.avif";
import product3 from "../images/products/Superstar_Shoes_White_EG4958_01-1.avif";
import product3_1 from "../images/products/Superstar_Shoes_White_EG4958_02-2.avif";

import product4 from "../images/products/Essentials_Single_Jersey_Linear_blue-1.avif";
import product4_1 from "../images/products/Essentials_Single_Jersey_Linear_blue-2.avif";
import product5 from "../images/products/Essentials_Single_Jersey_green-1.avif";
import product5_1 from "../images/products/Essentials_Single_Jersey_Linear_Green_2.avif";
import product6 from "../images/products/Essentials_Single_Jersey_brown-1.avif";
import product6_1 from "../images/products/Essentials_Single_Jersey_brown-2.avif";

import product7 from "../images/products/VALRUN_SHOES_Black_GB2346_01-1.avif";
import product7_1 from "../images/products/VALRUN_SHOES_Black_GB2346_02-2.avif";
import product8 from "../images/products/VALRUN_SHOES_Blue_GB2347_01.avif";
import product8_1 from "../images/products/VALRUN_SHOES_Blue_GB2347_02.avif";
import product9 from "../images/products/VALRUN_SHOES_Blue_GB2348_01.avif";
import product9_1 from "../images/products/VALRUN_SHOES_Blue_GB2348_02.avif";

import product10 from "../images/products/FREELIFT_TEE_Green_IQ1628_1.avif";
import product10_1 from "../images/products/FREELIFT_TEE_Green_IQ1628_23_2.avif";
import product11 from "../images/products/FREELIFT_TEE_Black_HZ8983_21_1.avif";
import product11_1 from "../images/products/FREELIFT_TEE_Black_HZ8983_23_2.avif";
import product12 from "../images/products/SST_Bonded_Track_Pants_Black_IM9880_1.avif";
import product12_1 from "../images/products/SST_Bonded_Track_Pants_Black_IM9880_23_2.avif";

import product13 from "../images/products/AEROREADY_Sereno_Logo_Tee_Black_H28926_01_laydown.avif";
import product14 from "../images/products/AEROREADY_Sereno_Logo_Tee_Blue_GT8798_01_laydown.avif";

import product15 from "../images/products/Adissage_Slides_Blue_F35579_01_standard.avif";
import product15_1 from "../images/products/Adissage_Slides_Blue_F35579_02_standard.avif";
import product16 from "../images/products/Essentials_Single_Jersey_Linear_Green_2.avif";
import product17_1 from "../images/products/Essentials_Single_Jersey_Linear_Green_2.avif";

export const products = [
  {
    id: 1,
    name: "Superstar Shoes",
    thumbnailImages: [product1, product1_1],
    salePrice: "₹8999.00",
    originalPrice: "₹6299.50",
    discountPercentage: 20,
    variants: [
      { id: 1, name: "Variant 1", images: [product2, product2_1] },
      { id: 2, name: "Variant 2", images: [product3, product3_1] },
    ],
  },
  {
    id: 2,
    name: "Essentials Single Jersey",
    thumbnailImages: [product4, product4_1],
    salePrice: "₹3499.00",
    originalPrice: "₹5999.00",
    discountPercentage: 20,
    variants: [
      { id: 1, name: "Variant 1", images: [product5, product5_1] },
      { id: 2, name: "Variant 2", images: [product6, product6_1] },
    ],
  },
  {
    id: 3,
    name: "VALRUN SHOES",
    thumbnailImages: [product7, product7_1],
    salePrice: "₹2999.00",
    originalPrice: "₹4999.00",
    discountPercentage: 20,
    variants: [
      { id: 1, name: "Variant 1", images: [product7, product7_1] },
      { id: 2, name: "Variant 2", images: [product9, product9_1] },
      { id: 3, name: "Variant 2", images: [product8, product8_1] },
    ],
  },
  {
    id: 4,
    name: "FREELIFT TEE",
    thumbnailImages: [product10, product10_1],
    salePrice: "₹8999.00",
    originalPrice: "₹8999.00",
    discountPercentage: 20,
    variants: [
      { id: 1, name: "Variant 1", images: [product11, product11_1] },
      { id: 1, name: "Variant 1", images: [product12, product12_1] },
    ],
  },
  {
    id: 5,
    name: "AEROREADY Sereno Logo Tee",
    thumbnailImages: [product13],
    salePrice: "₹8999.00",
    originalPrice: "₹8999.00",
    discountPercentage: 20,
    variants: [
      { id: 1, name: "Variant 1", images: [product13] },
      { id: 2, name: "Variant 2", images: [product14] },
    ],
  },
  {
    id: 6,
    name: "Adissage_Slides",
    thumbnailImages: [product4, product4_1],
    salePrice: "₹899.00",
    originalPrice: "₹999.00",
    discountPercentage: 10,
    variants: [
      { id: 5, name: "Variant 2", images: [product6, product6_1] },
      { id: 1, name: "Variant 1", images: [product5, product5_1] },
    ],
  },
  {
    id: 7,
    name: "Adissage_Slides",
    thumbnailImages: [product9],
    salePrice: "₹990.00",
    originalPrice: "₹1000.00",
    discountPercentage: 10,
    variants: [
      { id: 1, name: "Variant 1", images: [product11] },
      { id: 2, name: "Variant 2", images: [product12] },
    ],
  },
  {
    id: 8,
    name: "Superstar Shoes",
    thumbnailImages: [product11],
    salePrice: "₹8999.00",
    originalPrice: "₹8999.00",
    discountPercentage: 20,
    variants: [{ id: 1, name: "Variant 1", images: [product12] }],
  },
  {
    id: 9,
    name: "Superstar Shoes",
    thumbnailImages: [product13],
    salePrice: "₹680.00",
    originalPrice: "₹990.00",
    discountPercentage: 30,
    variants: [
      { id: 1, name: "Variant 1", images: [product14] },
      { id: 2, name: "Variant 2", images: [product12] },
      { id: 3, name: "Variant 2", images: [product10] },
    ],
  },
  {
    id: 10,
    name: "product-8",
    thumbnailImages: [product8],
    salePrice: "₹499.00",
    originalPrice: "₹899.00",
    discountPercentage: 40,
    variants: [
      { id: 1, name: "Variant 1", images: [product7] },
      { id: 2, name: "Variant 2", images: [product9] },
    ],
  },
];
