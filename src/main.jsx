import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 
import './index.css'
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop.jsx';
import amplitude from 'amplitude-js'; 

// *** ÎNLOCUIEȘTE CU CHEIA TA REALĂ DE PROIECT AMPLITUDE ***
const AMPLITUDE_API_KEY = '7c7ab761a4d105d5d5b81bebf3c57587'; 

// Inițializarea Amplitude cu setările pentru Autocapture
amplitude.getInstance().init(AMPLITUDE_API_KEY, null, {
  includeUtm: true,      
  includeReferrer: true, 
  trackingOptions: {
    // NOU: Activăm Page Views automat. Vom trimite evenimentul standard Amplitude.
    pageViews: true, 
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)