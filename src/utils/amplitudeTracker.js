// src/utils/amplitudeTracker.js

import amplitude from 'amplitude-js';

// Funcție pentru a urmări orice eveniment general
export const trackEvent = (eventName, properties = {}) => {
  // Verifică dacă Amplitude este inițializat și are API Key
  if (amplitude.getInstance().options.apiKey) {
    amplitude.getInstance().logEvent(eventName, properties);
    // Afișează în consolă pentru debug
    console.log(`[Amplitude] Event tracked: ${eventName}`, properties); 
  } else {
    console.warn('Amplitude not initialized or API Key missing. Event not sent.');
  }
};

// Funcție specifică pentru a urmări click-urile pe butoane, incluzând contextul
export const trackButtonClick = (buttonName, location) => {
  trackEvent('Button Clicked', {
    button_name: buttonName,
    page_location: location,
  });
};