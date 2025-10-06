import { useRef } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import i18next from "i18next";
import Lenis from "@studio-freight/lenis";
import {
  useCurrentHash,
  setGlobalLenisInstance,
  setScrollActiveHash,
} from "../../hooks/useCurrentHash";

interface HeaderProps {
  linkMenu: { name: string; href: string }[];
}

export default function Header({ linkMenu }: HeaderProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [lang, setLang] = useState(false);
  const [langMobile, setLangMobile] = useState(false);
  const { hash: currentHash, setHash } = useCurrentHash();
  const lenisRef = useRef<Lenis | null>(null);
  const sectionIds = linkMenu.map((link) => link.href);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    setGlobalLenisInstance(lenis);

    // 👈 NEW: Lenis Scroll Listener for Home Section
    const checkHomeSection = ({ scroll }: { scroll: number }) => {
      // If the user is at the very top, force the active hash to '#home'
      if (scroll < 100) {
        // Check for a small buffer (e.g., 100 pixels)
        setScrollActiveHash("#home");
      }
    };

    lenis.on("scroll", checkHomeSection);

    const raf = (time: DOMHighResTimeStamp) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", checkHomeSection); // Cleanup the listener
      lenis.destroy();
    };
  }, []);

  //localStorage.setItem('preferredLanguage', 'en');

  const closeMenu = (link: string) => {
    const targetElement = document.querySelector(link);
    if (targetElement instanceof HTMLElement && lenisRef.current) {
      lenisRef.current.scrollTo(targetElement, {
        duration: 1,
        easing: (t) => t,
        offset: -100,
      });
      setHash(link);
    }
    setTimeout(() => {
      setNavbarOpen(false);
    }, 300);
  };

  useEffect(() => {
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
    i18next.changeLanguage(preferredLanguage);
    // setLang(preferredLanguage === 'fr');
    // setLangMobile(preferredLanguage === 'fr');
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1200 && navbarOpen) {
        setNavbarOpen(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navbarOpen, currentHash]);

  useEffect(() => {
    // Options for the Intersection Observer
    const observerOptions = {
      root: null, // viewport
      rootMargin: "-15% 0px -85% 0px", // A section is "active" when its top is 30% from viewport top
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          // Use the function from your hook to update the active hash
          setScrollActiveHash(id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Attach the observer to all target sections
    sectionIds.forEach((hash) => {
      const elementId = hash.replace("#", "");
      const target = document.getElementById(elementId);
      if (target) {
        observer.observe(target);
      }
    });

    // Cleanup on component unmount
    return () => {
      observer.disconnect();
    };
  }, [linkMenu]);

  const changeLanguageMobile = (lg: string) => {
    if (lg === "fr") {
      i18next.changeLanguage("fr");
      setLangMobile(true);
    } else if (lg === "en") {
      i18next.changeLanguage("en");
      setLangMobile(false);
    }
    setNavbarOpen(false);
    localStorage.setItem("preferredLanguage", lg);
  };

  return (
    <header
      className={`sectHeader sectHeader--fixed${
        navbarOpen ? " show-menu" : ""
      }`}
    >
      <div className="headerTop">
        <div className="container-transverse">
          <div className="headerTopContent">
            <div className="headerTopCol">
              <div className="header-reseau-sociaux">
                <a
                  className="header-rs-link"
                  href="https://github.com/Andriamahay11master"
                  target="_blank"
                  title="Profil Github"
                >
                  <i className="icon-github"></i>
                </a>
                <a
                  className="header-rs-link"
                  href="https://www.linkedin.com/in/andriamahay-henikaja-irimanana/"
                  target="_blank"
                  title="Profil LinkedIn"
                >
                  <i className="icon-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="headerTopCol">
              <div className="dropdown-language" onClick={() => setLang(!lang)}>
                <button className="dropdown-default">{i18next.language}</button>
                <ul
                  className={`dropdown-language-list ${
                    lang ? " show-dropdown" : ""
                  }`}
                >
                  <li>
                    <button
                      className="dropdown-link"
                      onClick={() => changeLanguageMobile("en")}
                    >
                      EN
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-link"
                      onClick={() => changeLanguageMobile("fr")}
                    >
                      FR
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="headerIntern">
        <div className="container-transverse">
          <div className="cntLogoMobile">
            <Link to="/#home" title="Ancre to top">
              <figure>
                <LazyLoadImage
                  src="/images/Mahay-profil-2.jpg"
                  alt="Logo Site"
                  width={200}
                  height={200}
                  title="Mahay image"
                />
              </figure>
              <span className="cntLogo-text">
                IRIMANANA Henikaja Andriamahay
              </span>
            </Link>
          </div>
          <div
            className={`headerInternContent${navbarOpen ? " show-menu" : ""}`}
          >
            <div className="cntlogo">
              <Link to="/" title="Ancre to top">
                <figure>
                  <LazyLoadImage
                    src="/images/Mahay-profil-2.jpg"
                    alt="Logo Site"
                    width={200}
                    height={200}
                    title="Mahay image"
                  />
                </figure>
                <span className="cntLogo-text">
                  IRIMANANA Henikaja Andriamahay
                </span>
              </Link>
            </div>
            <div className="boxNavIntern">
              <nav className="menuNav">
                <div className="cntNavBox">
                  <ul className="cntNav">
                    {linkMenu.map((link) => {
                      const isActive = currentHash === link.href;
                      return (
                        <li key={link.name}>
                          <Link
                            className={
                              isActive ? "cntNav-link active" : "cntNav-link"
                            }
                            to={link.href}
                            onClick={() => closeMenu(link.href)}
                            title="Link menu"
                          >
                            {link.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>

            <div className="block-bottom-mobile">
              <div className="header-reseau-sociaux">
                <a
                  className="header-rs-link"
                  href="https://github.com/Andriamahay11master"
                  target="_blank"
                  title="Profil Github"
                >
                  <i className="icon-github"></i>
                </a>
                <a
                  className="header-rs-link"
                  href="https://www.linkedin.com/in/andriamahay-henikaja-irimanana/"
                  target="_blank"
                  title="Profil LinkedIn"
                >
                  <i className="icon-linkedin"></i>
                </a>
              </div>
              <div className="list-language">
                <button
                  className={`list-language-link ${
                    !langMobile ? "active" : ""
                  }`}
                  onClick={() => changeLanguageMobile("en")}
                >
                  EN
                </button>
                <button
                  className={`list-language-link ${langMobile ? "active" : ""}`}
                  onClick={() => changeLanguageMobile("fr")}
                >
                  FR
                </button>
              </div>
            </div>
          </div>
          <div className="btnBox">
            <button
              className="btn btn-icon btn-mobile"
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-label="open navBar"
            >
              <i className={navbarOpen ? "icon-close" : "icon-burger"}></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
