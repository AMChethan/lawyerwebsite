import React from 'react';
import { Phone, MessageSquare, Navigation, MapPin } from 'lucide-react';
import { advocateData } from '../data/advocateData';

export const MobileStickyBar = () => {
  return (
    <div className="mobile-sticky-bar" aria-label="Mobile Quick Action Bar">
      <div className="sticky-bar-grid">
        {/* Call Button */}
        <a 
          href={advocateData.phones.primaryTel} 
          className="sticky-action-item sticky-call"
          id="mobile-sticky-call-btn"
          aria-label="Call Advocate directly"
        >
          <div className="sticky-icon-wrapper">
            <Phone size={18} />
          </div>
          <span className="sticky-label">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a 
          href={advocateData.whatsapp[0].url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="sticky-action-item sticky-whatsapp"
          id="mobile-sticky-whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          <div className="sticky-icon-wrapper">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.274.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824zM12.012 2.002C6.48 2.002 2 6.48 2 12.012c0 1.954.563 3.778 1.543 5.323L2 22l4.823-1.492c1.488.905 3.228 1.433 5.093 1.433 5.531 0 10.012-4.48 10.012-10.012 0-5.532-4.481-10.012-10.012-10.012z"/>
            </svg>
          </div>
          <span className="sticky-label">WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a 
          href={advocateData.office.googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="sticky-action-item sticky-directions"
          id="mobile-sticky-directions-btn"
          aria-label="Get directions to Vichila Complex"
        >
          <div className="sticky-icon-wrapper">
            <Navigation size={18} />
          </div>
          <span className="sticky-label">Directions</span>
        </a>

        {/* Location / Chamber Hours */}
        <a 
          href="#office" 
          className="sticky-action-item sticky-office"
          id="mobile-sticky-office-btn"
          aria-label="View Chamber Hours and Location"
        >
          <div className="sticky-icon-wrapper">
            <MapPin size={18} />
          </div>
          <span className="sticky-label">Chamber</span>
        </a>
      </div>
    </div>
  );
};
