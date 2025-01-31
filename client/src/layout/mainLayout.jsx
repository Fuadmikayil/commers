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
    {  
       topadss(locale: "${i18n.language}") {
        btnHref
        btnText
        text
      } 
      header(locale: "${i18n.language}") {
        lightModeIcon { url }
        inputIcon { url }
        inputPlaceholder
        logoImg { url }
        logoText
        userIcon { url }
        darkModeIcon { url }
        basketIcon { url }
        links
        menuIcon { url }
        languages
      } 
      footerSub(locale: "${i18n.language}") {
        buttonText
        title
        subtitle
        inputPlaceholder
      }
      footerLink(locale: "${i18n.language}") {
        logoImg { url }
        logoText
        sosialMediaImgs { url }
        Links
        paymentImgs { url }
        paymentTitle
        sosialMediaLinks
        desciription
      }
    }`;

  const { loading, data, errors } = getData(layoutQuery);

  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("isDarkMode")) || false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    setLayoutLoading(true);
    setTimeout(() => {
      setLayoutLoading(false);
    }, 2000);
  }, [i18n.language]);

  if (layoutLoading || loading) return <Loading />;
  if (errors) return <ErrorPage />;

  if (!data || !data.header || !data.footerSub || !data.footerLink) {
    return <div>Error loading layout data</div>;
  }

  return (
    <div className={`${darkMode ? "dark:bg-neutral-900" : ""}`}>
      <TopAds data={data.topadss} />
      <Header
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        data={data.header}
      />
      <Outlet />
      <Footer subscribeData={data.footerSub} footerData={data.footerLink} />
    </div>
  );
};

export default MainLayout;
