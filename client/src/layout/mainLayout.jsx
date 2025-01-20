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
  const [layoutLoading, setLayoutLoading] = useState(false);
  const { i18n } = useTranslation();

  const layoutQuery = `
     {  header(locale: "${i18n.language}") {
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
    } 
    footerSub(locale: "${i18n.language}") {
    buttonText
    title
    subtitle
    inputPlaceholder
  }
    footerLink(locale: "${i18n.language}") {
    logoImg {
      url
    }
    logoText
    sosialMediaImgs {
      url
    }
    Links
    paymentImgs {
      url
    }
    paymentTitle
    sosialMediaLinks
    desciription
  }
    }`;
  const { loading, data, errors } = getData(layoutQuery);

  useEffect(() => {
    setLayoutLoading(true);
    setTimeout(() => {
      setLayoutLoading(false);
    }, 2000);
  }, [i18n.language]);

  if (layoutLoading) return <Loading />;
  if (loading) return <Loading />;
  if (errors) return <ErrorPage />;

  return (
    <>
      <TopAds
        text={"Get 25% OFF on your first order."}
        btnText={"Order Now"}
        btnHref={"#"}
      />
      <Header data={data.header} />
      <Outlet />
      <Footer subscribeData={data.footerSub} footerData={data.footerLink} />
    </>
  );
};

export default MainLayout;
