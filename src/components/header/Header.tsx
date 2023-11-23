"use client"
import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import './header.scss';
import Image from 'next/image';
import i18n from '@/app/i18n';
import i18next from 'i18next';
const navLinks = [
    {
        name: 'Home',
        href: '/#home'   
    },  
    {
        name: "About",
        href: '/#about'
    } ,
    {
        name: 'Projects',
        href: '/#projects'
    },
    {
        name: 'Contact',
        href: '/#contact'
    }
];

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [lang, setLang] = useState(false);
    const pathname = usePathname();
    
    const closeMenu = () => {
        setTimeout(() => {
            setNavbarOpen(false);
        }, 300)
      }

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
    }, [navbarOpen]);

    return (
        <Suspense fallback="loading">
            <header className={`sectHeader sectHeader--fixed${navbarOpen ? ' show-menu' : ''}`}>
                <div className="headerTop">
                    <div className="container-transverse">
                        <div className="headerTopContent">
                            <div className="headerTopCol">
                                <div className="header-reseau-sociaux">
                                    <Link className="header-rs-link" href="https://wwww.facebook.fr" target='_blank'><i className="icon-fb" aria-label='Mahay facebook page'></i></Link>
                                    <Link className="header-rs-link" href="https://www.linkedin.com/in/andriamahay-henikaja-irimanana/" target='_blank'><i className="icon-linkedin" aria-label='Mahay linkedin page'></i></Link>
                                </div>
                            </div>
                            <div className="headerTopCol">
                                <div className="dropdown-language" onClick={() => setLang(!lang)}>
                                    <button className='dropdown-default'>{i18next.language}</button>
                                    <ul className={`dropdown-language-list ${lang ? ' show-dropdown' : ''}`}>
                                        <li><button className='dropdown-link' onClick={() => i18next.changeLanguage('en')}>EN</button></li>
                                        <li><button className='dropdown-link' onClick={() => i18next.changeLanguage('fr')}>FR</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headerIntern"> 
                    <div className="container-transverse">
                        <div className="cntLogoMobile">
                                <Link href="/#home">
                                    <figure>
                                        <Image src="/images/Mahay.jpg" alt="Logo Site" width={200} height={200}/>
                                    </figure>
                                    <span className='cntLogo-text'>IRIMANANA Henikaja Andriamahay</span>
                                </Link>
                        </div>
                        <div className={`headerInternContent${navbarOpen ? ' show-menu' : ''}`}>
                            <div className="cntlogo">
                                <Link href="/">
                                    <figure>
                                        <Image src="/images/Mahay.jpg" alt="Logo Site" width={200} height={200}/>
                                    </figure>
                                    <span className='cntLogo-text'>IRIMANANA Henikaja Andriamahay</span>
                                </Link>
                            </div>
                            <div className="boxNavIntern"> 
                                <nav className="menuNav"> 
                                    <div className="cntNavBox"> 
                                        <ul className="cntNav">
                                            {navLinks.map((link) => {
                                                const isActive = pathname === link.href
                                        
                                                return (
                                                    <li key={link.name}>
                                                        <Link
                                                            className={isActive ? 'cntNav-link active' : 'cntNav-link'}
                                                            href={link.href}
                                                            onClick={closeMenu} locale="en">
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                
                                                )
                                            })}
                                        </ul> 
                                    </div> 
                                </nav>  
                            </div>

                            <div className="block-bottom-mobile">
                                <div className="header-reseau-sociaux">
                                    <Link className="header-rs-link" href="https://www.facebook.com" target='_blank'><i className="icon-fb"></i></Link>
                                    <Link className="header-rs-link" href="https://www.linkedin.com/in/andriamahay-henikaja-irimanana/" target='_blank'><i className="icon-linkedin"></i></Link>
                                </div>
                                <div className="list-language">
                                    <Link className="list-language-link" href="#">FR</Link>
                                    <Link className="list-language-link" href="#">EN</Link>
                                </div>
                            </div>
                        </div> 
                        <div className="btnBox">
                            <button className="btn btn-icon btn-mobile" onClick={()=>setNavbarOpen(!navbarOpen)} aria-label="open navBar">
                                <i className={navbarOpen ? "icon-close" : "icon-burger"}></i>
                            </button>
                        </div>  
                    </div>
                </div>   
            </header>
        </Suspense>
    )
  }
  