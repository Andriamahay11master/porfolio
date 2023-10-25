"use client"
import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import './header.scss';
import Image from 'next/image';

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
    const pathname = usePathname();

    const closeMenu = () => {
        setTimeout(() => {
            setNavbarOpen(false);
        }, 300)
      }

    return (
        <header className={`sectHeader sectHeader--fixed${navbarOpen ? ' show-menu' : ''}`}>
            <div className="headerTop">
                <div className="container-transverse">
                    <div className="headerTopContent">
                        <div className="headerTopCol">
                            <div className="header-reseau-sociaux">
                                <Link className="header-rs-link" href="/home"><i className="icon-facebook" aria-label='Crabone facebook page'></i></Link>
                                <Link className="header-rs-link" href="/informer"><i className="icon-twitter" aria-label='Crabone twitter page'></i></Link>
                                <Link className="header-rs-link" href="/empreinte"><i className="icon-linkedin" aria-label='Crabone linkedin page'></i></Link>
                                <Link className="header-rs-link" href="/contact"><i className="icon-youtube" aria-label='Crabone youtube page'></i></Link>
                            </div>
                        </div>
                        <div className="headerTopCol">
                            <div className="dropdown-language">
                                <Link href="#" className='dropdown-default'>FR</Link>
                                <ul className="dropdown-language-list">
                                    <li><Link href="#" className='dropdown-link'>EN</Link></li>
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
                                                        onClick={closeMenu}>
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
                                <Link className="header-rs-link" href="#"><i className="icon-facebook"></i></Link>
                                <Link className="header-rs-link" href="#"><i className="icon-twitter"></i></Link>
                                <Link className="header-rs-link" href="#"><i className="icon-linkedin"></i></Link>
                                <Link className="header-rs-link" href="#"><i className="icon-youtube"></i></Link>
                            </div>
                            <div className="list-language">
                                <Link className="list-language-link" href="#">FR</Link>
                                <Link className="list-language-link" href="#">MG</Link>
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
    )
  }
  