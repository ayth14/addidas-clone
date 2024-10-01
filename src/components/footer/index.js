import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #f8f8f8;
  text-align: center;
`;

const BackToTopButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const AccountActions = styled.div`
  padding: 20px 0;
  background-color: #000;
  font-size: 14px;
  font-weight: 700;
  display: none;
  a {
    margin: 0 50px;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const NewsletterContainer = styled.div`
  margin: 20px 0;
  padding: 40px;
  background-color: #ede734;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    display: block;
    margin-bottom: 10px;
    padding-right: 20px;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 700;
  }

  span {
    margin-left: 5px;
    margin-right: 5px;
  }
  button {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    position: relative;
    font-size: 14px;
    font-weight: 700;
    transition: color 0.3s;
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
  }
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 1010px;
  text-align: left;
  h5 {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
  }
  li {
    margin: 10px 0;

    a {
      text-decoration: none;
      color: #000;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const FooterCopyright = styled.div`
  padding-top: 20px;
`;
const NavLink = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #ddd;
  background-color: #282c31;
  font-size: 12px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  color: #fff;
  flex-direction: row;
  @media (min-width: 768px) {
    flex-direction: column;
  }
  .legal-menu {
    display: flex;
    list-style: none;
    padding: 0;
    column-gap: 20px;
    li {
      border-right: 1px solid #fff;
      &:last-child {
        border: none;
      }
    }
    a {
      padding-right: 20px;
    }
  }
`;

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      {showButton && (
        <BackToTopButton onClick={handleClick}>
          <span className="gl-icon__wrapper" role="img">
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </span>
          <span>Back to top</span>
        </BackToTopButton>
      )}

      <AccountActions>
        <a href="/account-login">Login</a>
        <a href="/cart">Your bag (0)</a>
      </AccountActions>

      <NewsletterContainer>
        <p>Join adidas and get 15% OFF</p>
        <button>
          <span>SIGN UP FOR FREE</span>
          <span>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </span>
        </button>
      </NewsletterContainer>

      <ListContainer>
        <li>
          <h5>Products</h5>
          <ul>
            <li>
              <a
                href="/shoes"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-products-_-footwear"
              >
                <span>Footwear</span>
              </a>
            </li>
            <li>
              <a
                href="/clothing"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-products-_-clothing"
              >
                <span>Clothing</span>
              </a>
            </li>
            <li>
              <a
                href="/accessories"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-products-_-accessories"
              >
                <span>Accessories</span>
              </a>
            </li>
            <li>
              <div className="_separator_3r0rv_1"></div>
            </li>
            <li>
              <a
                href="/outlet"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-products-_-outlet-sale"
              >
                <span>Outlet-Sale</span>
              </a>
            </li>
            <li>
              <a
                href="/new_arrivals?sale_percentage_en_in=0%25"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-products-_-new arrivals"
              >
                <span>New Arrivals</span>
              </a>
            </li>
            <li>
              <a
                href="/special_offer"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-products-_-special offer"
              >
                <span>Special Offer</span>
              </a>
            </li>
            <li>
              <a
                href="/stock_clearance"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-products-_-flat 50% off!"
              >
                <span>Flat 50% Off!</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h5>Sports</h5>
          <ul>
            <li>
              <a
                href="/cricket"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-sports-_-cricket"
              >
                <span>CRICKET</span>
              </a>
            </li>
            <li>
              <a
                href="/running"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-sports-_-running"
              >
                <span>Running</span>
              </a>
            </li>
            <li>
              <a
                href="/football"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-sports-_-football"
              >
                <span>Football</span>
              </a>
            </li>
            <li>
              <a
                href="/training?grid=true"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-sports-_-gym/training"
              >
                <span>Gym/Training</span>
              </a>
            </li>
            <li>
              <a
                href="/tennis?grid=true"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-sports-_-tennis"
              >
                <span>Tennis</span>
              </a>
            </li>
            <li>
              <a
                href="/outdoor"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-sports-_-outdoor"
              >
                <span>Outdoor</span>
              </a>
            </li>
            <li>
              <a
                href="/basketball"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-sports-_-basketball"
              >
                <span>Basketball</span>
              </a>
            </li>
            <li>
              <a
                href="/swim?grid=true"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-sports-_-swimming"
              >
                <span>Swimming</span>
              </a>
            </li>
            <li>
              <a
                href="/skateboarding?grid=true"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-sports-_-skateboarding"
              >
                <span>Skateboarding</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h5>Collections</h5>
          <ul>
            <li>
              <a
                href="/ultraboost"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-collections-_-ultraboost"
              >
                <span>Ultraboost</span>
              </a>
            </li>
            <li>
              <a
                href="/superstar"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-collections-_-superstar"
              >
                <span>Superstar</span>
              </a>
            </li>
            <li>
              <a
                href="/nmd"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-collections-_-nmd"
              >
                <span>NMD</span>
              </a>
            </li>
            <li>
              <a
                href="/stan_smith"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-collections-_-stan smith"
              >
                <span>Stan Smith</span>
              </a>
            </li>
            <li>
              <a
                href="/sustainability"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-collections-_-sustainability"
              >
                <span>Sustainability</span>
              </a>
            </li>
            <li>
              <a
                href="/predator"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-collections-_-predator"
              >
                <span>Predator</span>
              </a>
            </li>
            <li>
              <a
                href="/parley?grid=true"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-collections-_-parley"
              >
                <span>Parley</span>
              </a>
            </li>
            <li>
              <a
                href="/adicolor"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-collections-_-adicolor"
              >
                <span>Adicolor</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h5>Supports</h5>
          <ul>
            <li>
              <a
                href="/help"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-support-_-help"
              >
                <span>Help</span>
              </a>
            </li>
            <li>
              <a
                href="/help/contact-us"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-support-_-customer services"
              >
                <span>Customer Services</span>
              </a>
            </li>
            <li>
              <a
                href="/help/returns-refunds/how-do-i-return-my-products"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-support-_-returns &amp; exchanges"
              >
                <span>Returns &amp; Exchanges</span>
              </a>
            </li>
            <li>
              <a
                href="/help/delivery/how-do-i-check-my-order-or-delivery-status"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-support-_-shipping"
              >
                <span>Shipping</span>
              </a>
            </li>
            <li>
              <a
                href="/order-tracker"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-support-_-order tracker"
              >
                <span>Order Tracker</span>
              </a>
            </li>
            <li>
              <a
                href="/storefront"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-support-_-store finder"
              >
                <span>Store Finder</span>
              </a>
            </li>
            <li>
              <a
                href="/adiclub"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-support-_-adiclub"
              >
                <span>adiClub</span>
              </a>
            </li>
            <li>
              <a
                href="/terms-and-conditions-adiclub"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-support-_-adiclub terms and conditions"
              >
                <span>adiclub Terms and conditions</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h5>Company Info</h5>
          <ul>
            <li>
              <a
                href="https://www.adidas-group.com/en/"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-company info-_-about us"
              >
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-company info-_-adidas stories"
              >
                <span>adidas stories</span>
              </a>
            </li>
            <li>
              <a
                href="/mobileapps"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-company info-_-adidas apps"
              >
                <span>adidas Apps</span>
              </a>
            </li>
            <li>
              <a
                href="/help/company-information/entity-details"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-company info-_-entity details"
              >
                <span>Entity Details</span>
              </a>
            </li>
            <li>
              <a
                href="https://news.adidas.com/"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-company info-_-press"
              >
                <span>Press</span>
              </a>
            </li>
            <li>
              <a
                href="https://careers.adidas-group.com/"
                className="_navigation_link_1rbeu_1"
                data-auto-id="navigation-link"
                manual_cm_sp="footer-_-company info-_-careers"
              >
                <span>Careers</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h5>Follow Us</h5>

        </li>
      </ListContainer>

      <FooterBottom>
        <ul className="_legal_menu_1mryh_9 legal-menu">
          <NavLink>
            <a href="/help/company-information/what-is-the-privacy-policy">
              Privacy Policy
            </a>
          </NavLink>
          <NavLink>
            <a href="/help/company-information/what-are-the-terms-and-conditions">
              Terms and Conditions
            </a>
          </NavLink>
          <NavLink>
            <a href="/help/company-information/cookies-policy">Cookies</a>
          </NavLink>
        </ul>
        <FooterCopyright>
          <span>©2024 adidas India Marketing Pvt. Ltd</span>
        </FooterCopyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
