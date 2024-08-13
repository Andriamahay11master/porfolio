import { useEffect, useState } from 'react';
import './scrolltotop.scss';
export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 250) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={`scrolltop ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
            <span className="scrolltop-value">
                <i className="icon-arrow-up"></i>
            </span>
        </div>
    )
}