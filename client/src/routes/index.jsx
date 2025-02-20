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
import AdminCustomers from "../components/adminCustomers";
import AdminReviews from "../components/adminReviews";
import AdminSettings from "../components/adminSettings";
import Categories from "../pages/categories";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";

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
        path: "/about",
        element: <AboutPage  />,
      },
      {
        path: "/contact",
        element: <ContactPage  />,
      },
      {
        path: "/category",
        element: <Categories />,
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
          {
            path: "customers",
            element: <AdminCustomers />,
          },
          {
            path: "reviews",
            element: <AdminReviews />,
          },
          {
            path: "settings",
            element: <AdminSettings />,
          },
        ],
      },
    ],
  },
]);
