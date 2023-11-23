import * as React from 'react';
import './footer.scss';
import Link from 'next/link';

export default function Footer() {
    
    return (
        <footer className='footerPage'>
            <div className="cntFooter">
                <div className="colFooter">
                    <h2 className='title-h2 titleFooter'>Henikaja Andriamahay IRIMANANA</h2>
                    <p className="txtFooter">
                        Premier calculateur de carbone conçu pour calculer l&apos;impact individuel des malgaches concernant le changement climatique. Il permet de détermine la quantité de CO2 que vous émettez à l’année à Madagascar selon votre mode de vie quotidienne (alimentation, transports, logement) et vous permet d&paos;agir dès maintenant en adoptant des éco-gestes qui ont un impact significatif. 
                    </p>
                </div>
                <div className="colFooter">
                    <div className="titleFooter">Follow me</div>
                    <div className="listLink">
                        <div className="itemLink">
                            <Link href="#" target='_blank'><i className="icon-footer icon-fb"></i></Link>
                        </div>
                        <div className="itemLink">
                            <Link href="#" target='_blank'><i className="icon-footer icon-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="footerCopyright">
                <div className="cntCopyright">
                    <div className="itemCol"> 
                        <p>2023 © CALCULATEUR CARBONE - Made by <Link href="/" className='copyRightLink'>Henikaja Andriamahay Irimanana</Link></p>
                    </div>
                </div>
            </div>
        </footer> 
    )
  }
  