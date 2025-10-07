import ListSkills from "./components/listSkills/ListSkills";
import ListProject from "./components/project/ListProject";
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
import ContactText from "./components/contact/ContactText";

function App() {
  const data = useTranslatedData();

  const loading = useLoader();

  return (
    <>
      {loading && <Loader />}
      <Header linkMenu={data.nav} />
      <main className="main-page">
        <BlockMainContent data={data.blockContentRight} id="home" />
        <Content
          title={data.about.title}
          children={<p>{data.about.desc}</p>}
          id="about"
        />
        <Content
          title={data.skills.title}
          children={<ListSkills data={data.skills.data} />}
          id="projects"
        />
        <ListProject list={data.projects} />
        <Content
          title={data.contact.title}
          children={<ContactText data={data.contact} />}
          classN="contact"
          id="contact"
        />
      </main>
      <Footer {...data.footer} />
      <ScrollToTop />
    </>
  );
}

export default App;
