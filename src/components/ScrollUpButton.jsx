import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai'; // Ícone de seta para cima

const ScrollUpButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 p-3 bg-purple-600 text-white rounded-full shadow-lg transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Scroll to top"
        >
            <AiOutlineArrowUp size={24} />
        </button>
    );
};

export default ScrollUpButton;
