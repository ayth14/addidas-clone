import { lazy } from "react";

const Home = lazy(() => import("../views/outlet"));
const Cart = lazy(() => import("../views/cart"));
export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart/>
  },
];
