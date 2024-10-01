import React from "react";

const FlyoutPanel = ({ showPanel, onClose }) => {
  return (
    <div
      className={`transition-transform transform ${
        showPanel ? "translate-y-0" : "-translate-y-full"
      } bg-gray-100 p-6 fixed top-0 w-full z-50 shadow-lg`}
    >
      <div className="max-w-screen-lg mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        <button
          className="absolute top-4 right-4 text-black hover:text-gray-800 border-2 rounded-none py-2 px-3"
          onClick={onClose}
          aria-label="Close Panel"
        >
          <i className="fa fa-close" aria-hidden="true"></i>
        </button>
        <div>
          <h3 className="text-xl font-semibold">SIGN UP & GET 15% OFF</h3>
          <p>
            Members get more! Like a 15% discount voucher, early access to the
            sale and access to limited edition products. Sign up now!
          </p>
          <a href="/adiclub" className="block mt-2 text-blue-500 underline">
            LEARN MORE
          </a>
        </div>
        <div>
          <h3 className="text-xl font-semibold">
            FREE DELIVERY, RETURN & EXCHANGE
          </h3>
          <p>
            Spend over Rs1000/- and your delivery is FREE! Return & Exchange is
            also offered for free.
          </p>
          <a
            href="/help/delivery/what-is-the-delivery-time--cost"
            className="block mt-2 text-blue-500 underline"
          >
            READ MORE ON DELIVERY
          </a>
        </div>
        <div>
          <h3 className="text-xl font-semibold">
            EXTRA 5% OFF ON PREPAID ORDERS
          </h3>
          <p>
            Save 5% extra on prepaid payments for all orders under Rs5000/-.
            Easy payments from UPI, Credit Card, and Net-banking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlyoutPanel;
