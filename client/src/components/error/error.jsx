import React from "react";
import { Link } from "react-router-dom";
import "./error.css";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-lg text-gray-700">
        Üzgünüz, axtardığınız səhifə mövcud deyil.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
      >
        Ana Səhifəyə Qayıt
      </Link>
    </div>
  );
};

export default ErrorPage;
