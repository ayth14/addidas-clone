import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { addToCart } from "../../store/cartSlice";

const Card = styled.div`
  text-align: left;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: scale(1);
    border: 1px solid #000;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  padding-left: 16px;
`;

const SalePrice = styled.p`
  color: #ef4444;
  font-size: 1.125rem;
  font-weight: 600;
`;

const OriginalPrice = styled.p`
  color: #9ca3af;
  text-decoration: line-through;
  font-size: 0.75rem;
`;

const OriginalPriceContainer = styled.p`
  display: flex;
  align-items: center;
  gap: 3;
`;

const Discount = styled.span`
  color: #e32b2b;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: 8px;
  margin-right: 10px;
`;

const VariantBlock = styled.div`
  display: none;
  background-color: white;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;

  ${Card}:hover & {
    display: flex;
  }
`;

const ColorVariant = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  cursor: pointer;

  :hover& {
    border-bottom: 4px solid #000;
  }
`;

const Button = styled.button`
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4b5563;
  }
`;

const ProductCard = ({ product }) => {
  const [featuredImage, setFeaturedImage] = useState(
    product.thumbnailImages[0]
  );
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  const handleVariantHover = (variant) => {
    setFeaturedImage(variant.images[0]);
  };

  const handleMouseLeave = () => {
    setFeaturedImage(product.thumbnailImages[0]);
  };

  const handleImageHover = () => {
    if (product.thumbnailImages.length > 1) {
      setFeaturedImage(product.thumbnailImages[1]);
    }
  };

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleCart = (id) => {
    let productToAdd = productList.find((item) => item.id === id);
    dispatch(addToCart({ product: productToAdd, quantity: 1 }));
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <Card onMouseLeave={handleMouseLeave}>
      {/* Featured Image */}
      <Image
        src={featuredImage}
        alt={product.name}
        onMouseEnter={handleImageHover}
      />

      {/* Variant Block */}
      <VariantBlock className="variant-block">
        {product.variants.slice(0, 3).map((variant, index) => (
          <ColorVariant
            key={index}
            src={variant.images[0]}
            alt={variant.name}
            onMouseEnter={() => handleVariantHover(variant)}
          />
        ))}
      </VariantBlock>

      <div className="flex items-center justify-between relative">
        <ProductName>{product.name}</ProductName>
        <Button onClick={() => handleCart(product.id)}>
          <BsCart />
        </Button>
        {showSuccess && (
          <span className="text-xs text-green-300 font-bold absolute -top-2 left-4">Added</span>
        )}
      </div>

      {/* Price and Discount */}
      {product.salePrice && (
        <div className="px-4">
          <SalePrice>{product.salePrice}</SalePrice>
          <OriginalPriceContainer>
            <OriginalPrice>{product.originalPrice}</OriginalPrice>
            <Discount>-{product.discountPercentage}%</Discount>
            <span>Original Price</span>
          </OriginalPriceContainer>
        </div>
      )}

      {/* Product Variants */}
      {product.variants.length > 0 && (
        <p className="text-sm mt-2 px-4">{product.variants.length} colors</p>
      )}
    </Card>
  );
};

export default ProductCard;
