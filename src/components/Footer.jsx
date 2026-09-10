import React from 'react';
import { Scale, Phone, MapPin, ArrowUp, Shield } from 'lucide-react';
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
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <div className="footer-nav-list">
              <a href="#about" className="footer-link">About</a>
              <a href="#practice-areas" className="footer-link">Practice Areas</a>
              <a href="#notary-services" className="footer-link">Notary Services</a>
              <a href="#professional-info" className="footer-link">Credentials</a>
              <a href="#office" className="footer-link">Chamber & Office Hours</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading">Direct Chamber Contact</h4>
            <p className="footer-contact-line">
              <Phone size={14} className="text-gold" />
              <a href={advocateData.phones.primaryTel}>{advocateData.phones.primaryFormatted}</a>
            </p>
            <p className="footer-contact-line">
              <MapPin size={14} className="text-gold" />
              <span>{advocateData.office.building}, {advocateData.office.area}, {advocateData.office.city}</span>
            </p>
            <button 
              type="button" 
              onClick={scrollToTop} 
              className="footer-top-btn"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Adv. Mallikarjunappa A S. All Rights Reserved. Mysuru, Karnataka.
          </p>
          <p className="footer-subtext">
            Digital Professional Visiting Card
          </p>
        </div>
      </div>
    </footer>
  );
};
