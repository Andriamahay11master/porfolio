import { useEffect, useState } from "react";
import SectionTitle from "./components/sectionTitle/SectionTitle";
import BlockInfo from "./components/blockInfo/BlockInfo";
import ListSkills from "./components/listSkills/ListSkills";
import ListProject from "./components/project/ListProject";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./i18n";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Loader from "./components/loader/Loader";
import { useTranslatedData } from "./hooks/useTranslatedData";
import "./App.scss";
import { useLoader } from "./hooks/useLoader";
import BlockMainContent from "./components/block/BlockMainContent";
import Content from "./components/content/Content";

function App() {
  const data = useTranslatedData();

  const loading = useLoader();

  return (
    <>
      {loading && <Loader />}
      <Header linkMenu={data.nav} />
      <main className="main-page">
        <div className="container">
          <BlockMainContent data={data.blockContentRight} />
          <Content title={data.about.title} children={data.about.desc} />
          <Content
            title={data.skills.title}
            children={<ListSkills data={data.skills.data} />}
          />
        </div>
        <SectionTitle {...data.project} />
        <div className="main-section project-section">
          <div className="container">
            <div className="project-block">
              <ListProject list={data.projects} />
            </div>
          </div>
        </div>
        <SectionTitle {...data.contact} />
        <Contact {...data.form} />
      </main>
      <Footer {...data.footer} />
      <ScrollToTop />
    </>
  );
}

export default App;
