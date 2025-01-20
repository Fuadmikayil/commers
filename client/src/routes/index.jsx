import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ProductDetail from "../pages/productDetail";
import ProductDetailInfo from "../components/productDetailInfo";
import ProductReviews from "../components/productReviews";
import MainLayout from "../layout/mainLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products/:documentId",
        element: <ProductDetail />,
        children: [
          {
            path: "",
            element: <ProductDetailInfo />,
          },
          {
            path: "reviews",
            element: <ProductReviews />,
          },
        ],
      },
    ],
  },
]);
