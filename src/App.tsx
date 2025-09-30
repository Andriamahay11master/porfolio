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
import "./App.scss";
import BlockContentRight from "./components/block/BlockContentRight";
import { useTranslatedData } from "./hooks/useTranslatedData";

function App() {
  const data = useTranslatedData();

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
      <Header linkMenu={data.nav} />
      <main className="main-page">
        <BlockContentRight data={data.blockContentRight} />
        <SectionTitle {...data.about} />
        <div className="main-section about-section">
          <div className="container">
            <div className="about-block">
              <BlockInfo {...data.blockInfo} />
              <ListSkills $title={data.skills.title} data={data.skills.data} />
            </div>
          </div>
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
