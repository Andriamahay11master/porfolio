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
import { findLast } from "lodash";

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

    const lastSectionHash = sectionIds[sectionIds.length - 1]; // e.g., #contact

    // Lenis Scroll Listener for Top and Bottom edge cases
    const checkEdgeSections = ({
      scroll,
      limit,
    }: {
      scroll: number;
      limit: number;
    }) => {
      // A. HOME SECTION CHECK (Top of page)
      if (scroll < 100) {
        // If scroll is near the top (e.g., first 100px)
        setScrollActiveHash("#home");
        return; // Exit to prevent other logic from overriding
      }

      // B. CONTACT SECTION CHECK (Bottom of page)
      // Check if the scroll position is within a small buffer of the maximum scroll limit
      const distanceFromBottom = limit - scroll;
      if (distanceFromBottom < 2) {
        // If scroll is within the last 10 pixels
        setScrollActiveHash(lastSectionHash);
      }
    };

    lenis.on("scroll", checkEdgeSections);

    const raf = (time: DOMHighResTimeStamp) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", checkEdgeSections); // Cleanup the listener
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
    // 1. Setup the Intersection Observer (IO)
    const observerOptions = {
      root: null, // viewport
      // Create a single, thin detection line 20% down from the top of the screen.
      rootMargin: "-25% 0px -75% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the *last* element that is intersecting (the one currently at the top)
      const activeEntry = findLast(
        entries,
        (entry: IntersectionObserverEntry) => entry.isIntersecting
      );

      if (activeEntry) {
        const id = `#${activeEntry.target.id}`;
        setScrollActiveHash(id);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // 2. Attach the observer to all sections
    sectionIds.forEach((hash) => {
      const elementId = hash.replace("#", "");
      const target = document.getElementById(elementId);
      if (target) {
        observer.observe(target);
      }
    });

    // 3. Cleanup on component unmount
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
