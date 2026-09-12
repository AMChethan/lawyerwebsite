import React from 'react';
import { Scale, Phone, MapPin, ArrowUp, Shield, Clock, Navigation } from 'lucide-react';
import { advocateData } from '../data/advocateData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        {/* Bar Council of India Compliance Box */}
        <div className="bci-disclaimer-box">
          <div className="disclaimer-header">
            <Shield size={16} className="text-gold" />
            <span className="disclaimer-title">Bar Council of India Compliance & Information Notice</span>
          </div>
          <p className="disclaimer-text">
            {advocateData.disclaimer}
          </p>
        </div>

        {/* Footer Main Row */}
        <div className="footer-main-row">
          <div className="footer-brand-col">
            <div className="footer-brand-title">
              <Scale size={20} className="text-gold" />
              <span>{advocateData.displayName}</span>
            </div>
            <p className="footer-brand-tagline">
              {advocateData.profession} • {advocateData.court}
            </p>
            <p className="footer-experience-note">
              {advocateData.qualification} | {advocateData.experienceFull}
            </p>
            <div className="footer-hours-pill">
              <Clock size={13} className="text-gold" />
              <span>Chamber Hours: 9:30–10:30 AM & 6:00–9:00 PM</span>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <div className="footer-nav-list">
              <a href="#visiting-card" className="footer-link">Digital Visiting Card</a>
              <a href="#about" className="footer-link">About Practice</a>
              <a href="#practice-areas" className="footer-link">Practice Areas (Civil/Criminal/Family/Property)</a>
              <a href="#notary-services" className="footer-link">Notary Services (Affidavits/Attestation/POA)</a>
              <a href="#professional-info" className="footer-link">Credentials & Standing</a>
              <a href="#office" className="footer-link">Chamber Location & Hours</a>
              <a href="#contact" className="footer-link">Direct Contact</a>
            </div>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading">Direct Chamber Contact</h4>
            <p className="footer-contact-line">
              <Phone size={14} className="text-gold" />
              <a href={advocateData.phones.primaryTel}>{advocateData.phones.primaryFormatted} (Primary / WhatsApp)</a>
            </p>
            <p className="footer-contact-line">
              <Phone size={14} className="text-gold" />
              <a href={`tel:${advocateData.phones.secondary}`}>{advocateData.phones.secondaryFormatted} (Direct Line)</a>
            </p>
            <p className="footer-contact-line">
              <MapPin size={14} className="text-gold" />
              <span>{advocateData.office.building}, {advocateData.office.street}, {advocateData.office.area}, {advocateData.office.city}</span>
            </p>
            <div className="footer-actions-row">
              <a 
                href={advocateData.office.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-map-btn"
              >
                <Navigation size={13} />
                <span>Google Maps</span>
              </a>
              <button 
                type="button" 
                onClick={scrollToTop} 
                className="footer-top-btn"
                aria-label="Scroll back to top"
              >
                <ArrowUp size={14} />
                <span>Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} ADV. MALLIKARJUNAPPA A S. All Rights Reserved. Mysuru, Karnataka.
          </p>
          <p className="footer-subtext">
            Advocate & Notary Public • District Court Mysore
          </p>
        </div>
      </div>
    </footer>
  );
};
