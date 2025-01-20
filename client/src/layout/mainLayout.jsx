import React, { useEffect, useState } from "react";
import TopAds from "../components/topAds";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import { useTranslation } from "react-i18next";
import "../i18n";
import Loading from "../components/loading/loading";
import { getData } from "../hooks/useFetch";

const MainLayout = () => {
    
  const { i18n } = useTranslation();

  const layoutQuery = `
     { header {
    lightModeIcon {
      url
    }
    inputIcon {
      url
    }
    inputPlaceholder
    logoImg {
      url
    }
    logoText
    userIcon {
      url
    }
    darkModeIcon {
      url
    }
    basketIcon {
      url
    }
    links
    menuIcon {
      url
    }
    languages
  } }`;
  const { loading, data, error } = getData(layoutQuery);
  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <>
      <TopAds
        text={"Get 25% OFF on your first order."}
        btnText={"Order Now"}
        btnHref={"#"}
      />
      <Header data={data.header} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
