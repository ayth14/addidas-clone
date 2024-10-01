// src/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowRightLong } from "react-icons/fa6";
import { removeFromCart } from "../../store/cartSlice";
import styled from "styled-components";
import { Header, Footer } from "@components";
const CartWrapper = styled.div`
  padding: 50px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
`;
const CartEmpty = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    margin: 20px 0;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    position: relative;
    font-size: 14px;
    font-weight: 700;
    transition: color 0.3s;


    &:before{
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

    &:after{
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

    &:hover {
      color: #444;
    }
}
`;
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  console.log('cart---items---', cartItems);
  
  return (
    <>
      <Header />
      <CartWrapper>
        {cartItems.length === 0 ? (
          <div className="my-28">
            <h1 className="text-3xl font-bold uppercase my-4">
              Your Bag is Empty
            </h1>
            <p className="text-lg font-normal my-4">
              Once you add something to your bag - it will appear here. Ready to
              get started?
            </p>
            <CartEmpty>
              <span className="pr-3">Get Started</span>
              <FaArrowRightLong />
            </CartEmpty>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id}>
              <span>{item.title}</span>
              <span>${item.sale}</span>
              <RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </RemoveButton>
            </CartItem>
          ))
        )}
      </CartWrapper>
      <Footer />
    </>
  );
};

export default Cart;
