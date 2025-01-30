import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ProductDetail from "../pages/productDetail";
import ProductDetailInfo from "../components/productDetailInfo";
import ProductReviews from "../components/productReviews";
import MainLayout from "../layout/mainLayout";
import MyBasketPage from "../pages/myBasketPage";
import AdminPage from "../pages/adminPage";
import AdminDashboard from "../components/adminDashboard";
import AdminProducts from "../components/adminProducts";
import AdminProductAdd from "../components/adminProductAdd";
import AdminOrder from "../components/adminOrder";

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
        path: "/my-basket",
        element: <MyBasketPage />,
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
      {
        path: "/admin",
        element: <AdminPage />,
        children: [
          {
            path: "dashboard",
            element: <AdminDashboard />,
          },
          {
            path: "products",
            element: <AdminProducts />,
          },
          {
            path: "productAdd",
            element: <AdminProductAdd />,
          },
          {
            path: "order",
            element: <AdminOrder />,
          },
        ],
      },
    ],
  },
]);
