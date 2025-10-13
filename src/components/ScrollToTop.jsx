// src/components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Am șters: import { trackEvent } from '../utils/amplitudeTracker'; 

// Am șters: Funcția getPageName nu mai este necesară

export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        // 1. SCROLL ÎNTOTDEAUNA LA ÎNCEPUTUL PAGINII
        window.scrollTo(0, 0);

        // 2. LOGICA DE TRACKING CUSTOM A FOST ȘTEARSĂ.
        // Evenimentul Page Viewed este acum gestionat automat de SDK (vezi main.jsx)

    }, [location.pathname]); // Se declanșează la fiecare schimbare de cale (navigare)

    return null;
}