import * as React from 'react';
import './footer.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='footerPage'>
            <div className="cntFooter">
                <div className="colFooter">
                    <Link href="/" className="logoFooter">
                        <Image src="/images/LogoGreenGascarFooter.svg" alt="Logo" width={155} height={44}/>
                    </Link>
                    <p className="txtFooter">
                    Premier calculateur de carbone conçu pour calculer l&apos;impact individuel des malgaches concernant le changement climatique. Il permet de détermine la quantité de CO2 que vous émettez à l’année à Madagascar selon votre mode de vie quotidienne (alimentation, transports, logement) et vous permet d&paos;agir dès maintenant en adoptant des éco-gestes qui ont un impact significatif. 
                    </p>
                </div>
                <div className="colFooter">
                    <div className="titleFooter">Accès rapide</div>
                    <nav className="navFooter">
                        <ul>
                            <li>
                                <Link href="/informer">S’informer</Link>
                            </li>
                            <li>
                                <Link href="/calcul">Calculer son empreinte</Link>
                            </li>
                            <li>
                                <Link href="/empreinte">Réduire son empreinte</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="colFooter">
                    <div className="titleFooter">Nos partenaires</div>
                    <nav className="navFooter">
                        <ul>
                            <li>
                                <Link href="https://www.bondy.earth" target='_blank'>Bôndy</Link>
                            </li>
                            <li>
                                <Link href="https://www.pulse.mg" target='_blank'>PULSE</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="colFooter">
                    <div className="titleFooter">Suivez-nous</div>
                    <div className="listLink">
                        <div className="itemLink">
                            <Link href="#"><i className="icon-footer icon-facebook"></i></Link>
                        </div>
                        <div className="itemLink">
                            <Link href="#"><i className="icon-footer icon-linkedin"></i></Link>
                        </div>
                        <div className="itemLink">
                            <Link href="#"><i className="icon-footer icon-twitter"></i></Link>
                        </div>
                        <div className="itemLink">
                            <Link href="#"><i className="icon-footer icon-youtube"></i></Link>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="footerCopyright">
                <div className="cntCopyright">
                    <div className="itemCol"> 
                        <p>2023 © CALCULATEUR CARBONE- Tous droits réservés</p>
                    </div>
                    <div className="itemCol">
                        <p><Link href="/mentionsLegales">Mentions légales</Link> - <Link href="/cookies">Cookies</Link> - <Link href="/gestionCookies">Gérer mes cookies</Link></p>
                    </div>
                    <div className="itemCol"> 
                        <p>Designed and Developed with <i className='icon-heart'></i> by <Link href="https://www.pulse.mg" target="_blank">PULSE</Link></p>
                    </div>
                </div>
            </div>
        </footer> 
    )
  }
  