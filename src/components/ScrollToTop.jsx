// src/components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from '../utils/amplitudeTracker'; // Funcția care trimite la Amplitude

// Funcție utilitară pentru a mapa calea URL la un nume de pagină lizibil
const getPageName = (pathname) => {
    if (pathname === '/') return 'Homepage';
    if (pathname.startsWith('/blogs/')) return 'Blog Detail Page'; 
    if (pathname === '/blogs') return 'Blog List Page';
    if (pathname === '/podcasts') return 'Podcast Page';
    if (pathname === '/privacy-policy') return 'Privacy Policy Page';
    if (pathname === '/amplitude-courses') return 'Amplitude Courses Page';
    return 'Other Page';
};

export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        // 1. SCROLL ÎNTOTDEAUNA LA ÎNCEPUTUL PAGINII
        window.scrollTo(0, 0);

        // 2. TRACKING AMPLITUDE: Trimite evenimentul la fiecare schimbare de rută
        const pageName = getPageName(location.pathname);
        
        // Evenimentul trimis este 'Page Viewed' (cel dorit de utilizator)
        trackEvent('Page Viewed', {
            page_name: pageName,
            page_path: location.pathname,
        });
    }, [location.pathname]);

    return null;
}