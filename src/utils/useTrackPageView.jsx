// src/utils/useTrackPageView.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from './amplitudeTracker';

// Funcție utilitară pentru a mapa calea URL la un nume de pagină lizibil
const getPageName = (pathname) => {
    if (pathname === '/') return 'Homepage';
    if (pathname.startsWith('/blogs')) return 'Blog Page';
    if (pathname === '/podcasts') return 'Podcast Page';
    if (pathname === '/privacy-policy') return 'Privacy Policy Page';
    if (pathname === '/amplitude-courses') return 'Amplitude Courses Page';
    return 'Other Page';
};

export default function useTrackPageView() {
    const location = useLocation();

    useEffect(() => {
        const pageName = getPageName(location.pathname);
        
        // Trimite evenimentul 'Page Viewed' cu proprietatea 'page_name'
        trackEvent('Page Viewed', {
            page_name: pageName,
            page_path: location.pathname,
        });

        // Opțional: Forțează scroll la începutul paginii după navigare, similar cu ScrollToTop
        // Această logică este deja în ScrollToTop.jsx, dar o lăsăm aici ca backup
        // window.scrollTo(0, 0); 

    }, [location.pathname]); // Se declanșează la fiecare schimbare de cale (navigare)

    return null;
}