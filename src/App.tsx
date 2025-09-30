import { useEffect, useState } from "react";
import Banner from "./components/banner/Banner";
import SectionTitle from "./components/sectionTitle/SectionTitle";
import BlockInfo from "./components/blockInfo/BlockInfo";
import ListSkills from "./components/listSkills/ListSkills";
import ListProject from "./components/project/ListProject";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./i18n";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Loader from "./components/loader/Loader";
import "./App.scss";
import BlockContentRight from "./components/block/BlockContentRight";
import { dataNav } from "./data/nav";
import { dataBanner, dataBlockContentRight } from "./data/banner";
import {
  dataAbout,
  dataBlockInfo,
  dataContact,
  dataProject,
} from "./data/section";
import { dataListSkills } from "./data/skills";
import dataProjectList from "./data/projects";
import { dataForm } from "./data/contact";
import { dataFooter } from "./data/footer";

function App() {
  const { t } = useTranslation("translation");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Header linkMenu={dataNav} />
      <main className="main-page">
        <Banner {...dataBanner} />
        <BlockContentRight data={dataBlockContentRight} />
        <SectionTitle {...dataAbout} />
        <div className="main-section about-section">
          <div className="container">
            <div className="about-block">
              <BlockInfo {...dataBlockInfo} />
              <ListSkills
                $title={dataListSkills.$title}
                data={dataListSkills.data}
              />
            </div>
          </div>
        </div>
        <SectionTitle {...dataProject} />
        <div className="main-section project-section">
          <div className="container">
            <div className="project-block">
              <ListProject list={dataProjectList} />
            </div>
          </div>
        </div>
        <SectionTitle {...dataContact} />
        <Contact {...dataForm} />
      </main>
      <Footer {...dataFooter} />
      <ScrollToTop />
    </>
  );
}

export default App;
