import { useState, useEffect } from 'react';
import { MdNorth } from "react-icons/md";
import "./styles.css";

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const scrollFunction = () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', scrollFunction);

        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (

        <button
            className={`btt-btn ${isVisible ? 'btt-btn--visible' : 'btt-btn--hidden'}`}
            onClick={scrollToTop}
            type="button"
            style={{ display: isVisible ? 'flex' : 'none' }}
        >
            <MdNorth className="btt-icon" />
        </button>

    );
}

export default BackToTop;