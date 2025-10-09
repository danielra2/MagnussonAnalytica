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
  // NOU: Aceste opțiuni activează urmărirea automată a datelor esențiale
  includeUtm: true,      // Urmărește automat parametrii UTM (sursa de trafic)
  includeReferrer: true, // Urmărește sursa de pe care a venit utilizatorul
  trackingOptions: {
    // Activează urmărirea automată a evenimentelor de bază
    pageViews: true, // Urmărește automat 'Page Viewed' la încărcarea paginii
    // sessions: true // Sesinunile sunt, de obicei, urmărite automat implicit
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