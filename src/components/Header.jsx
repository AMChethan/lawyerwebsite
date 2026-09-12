import React, { useState, useEffect } from 'react';
import { Scale, Phone, QrCode, Menu, X, Clock, MapPin, MessageSquare } from 'lucide-react';
import { advocateData } from '../data/advocateData';

export const Header = ({ onOpenQR }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'Notary Services', href: '#notary-services' },
    { label: 'Credentials', href: '#professional-info' },
    { label: 'Chamber & Hours', href: '#office' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Judicial Announcement Bar */}
      <div className="top-announcement-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <MapPin size={13} className="text-gold" />
              <span>{advocateData.court}</span>
            </span>
            <span className="top-bar-separator">•</span>
            <span className="top-bar-item">
              <Clock size={13} className="text-gold" />
              <span>Chamber Hours: <strong>9:30–10:30 AM</strong> & <strong>6:00–9:00 PM</strong></span>
            </span>
          </div>

          <div className="top-bar-right">
            <a href={advocateData.phones.primaryTel} className="top-bar-phone">
              <Phone size={12} className="text-gold" />
              <span>{advocateData.phones.primaryFormatted}</span>
            </a>
            <span className="top-bar-separator">|</span>
            <a href={`tel:${advocateData.phones.secondary}`} className="top-bar-phone">
              <Phone size={12} className="text-gold" />
              <span>{advocateData.phones.secondaryFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          <a href="#" className="header-brand" aria-label="ADV. Mallikarjunappa A S Homepage">
            <div className="brand-icon-wrapper">
              <Scale className="brand-scale-icon" size={22} strokeWidth={2.2} />
            </div>
            <div className="brand-text">
              <span className="brand-name">{advocateData.displayName}</span>
              <span className="brand-title">{advocateData.profession} • {advocateData.qualification}</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="header-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <button 
              type="button" 
              onClick={onOpenQR} 
              className="qr-btn" 
              title="View QR Visiting Card & Share"
              aria-label="View QR Code"
            >
              <QrCode size={17} />
              <span className="qr-btn-text">QR Card</span>
            </button>

            <a 
              href={advocateData.whatsapp[0].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="header-whatsapp-btn"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare size={16} />
              <span className="hide-on-mobile">WhatsApp</span>
            </a>

            <a 
              href={advocateData.phones.primaryTel} 
              className="header-call-btn"
              aria-label={`Call ${advocateData.phones.primaryFormatted}`}
            >
              <Phone size={15} />
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              type="button" 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-nav-menu" id="mobile-navigation">
            <div className="container mobile-nav-container">
              <div className="mobile-hours-badge">
                <Clock size={15} className="text-gold" />
                <span>Hours: 9:30–10:30 AM & 6:00–9:00 PM (Mon–Sat)</span>
              </div>

              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mobile-nav-divider"></div>
              
              <button 
                type="button" 
                className="mobile-nav-qr-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQR();
                }}
              >
                <QrCode size={18} />
                <span>Show QR Visiting Card</span>
              </button>

              <div className="mobile-nav-buttons-row">
                <a 
                  href={advocateData.phones.primaryTel} 
                  className="mobile-nav-cta"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone size={16} />
                  <span>Call 9980051736</span>
                </a>
                <a 
                  href={advocateData.whatsapp[0].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mobile-nav-cta cta-wa"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
