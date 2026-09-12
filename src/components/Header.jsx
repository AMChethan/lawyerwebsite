import React, { useState, useEffect } from 'react';
import { Scale, Phone, QrCode, Menu, X, Clock, MapPin, MessageSquare, ChevronRight } from 'lucide-react';
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
              <Scale size={13} className="text-gold" />
              <span>Advocate & Notary • District Court Mysore</span>
            </span>
          </div>

          <div className="top-bar-right">
            <span className="top-bar-item">
              <Clock size={13} className="text-gold" />
              <span>Chamber Hours: <strong>9:30–10:30 AM</strong> & <strong>6:00–9:00 PM</strong> (Mon–Sat)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Brand Logo & Name */}
          <a href="#" className="header-brand" aria-label="ADV. Mallikarjunappa A S Homepage">
            <div className="brand-icon-wrapper">
              <Scale className="brand-scale-icon" size={20} strokeWidth={2.2} />
            </div>
            <div className="brand-text">
              <span className="brand-name">ADV. MALLIKARJUNAPPA A S</span>
              <span className="brand-title">Advocate & Notary • 25+ Years Experience</span>
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

          {/* Header Action Buttons (Neat, Elegant & Refined) */}
          <div className="header-actions">
            <button 
              type="button" 
              onClick={onOpenQR} 
              className="qr-btn hide-on-mobile" 
              title="View Digital QR Card"
              aria-label="View QR Card"
            >
              <QrCode size={15} />
              <span>QR Card</span>
            </button>

            <a 
              href={advocateData.phones.primaryTel} 
              className="header-call-btn hide-on-mobile"
              aria-label={`Call ${advocateData.displayName}`}
            >
              <Phone size={14} />
              <span>Call: 99800 51736</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button 
              type="button" 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-nav-menu" id="mobile-navigation">
            <div className="container mobile-nav-container">
              <div className="mobile-hours-badge">
                <Clock size={14} className="text-gold" />
                <span>Chamber: 9:30–10:30 AM & 6:00–9:00 PM (Mon–Sat)</span>
              </div>

              <div className="mobile-nav-links-list">
                {navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={16} className="mobile-link-arrow" />
                  </a>
                ))}
              </div>
              
              <div className="mobile-nav-divider"></div>
              
              <button 
                type="button" 
                className="mobile-nav-qr-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQR();
                }}
              >
                <QrCode size={16} />
                <span>Show QR Visiting Card</span>
              </button>

              <div className="mobile-nav-buttons-row">
                <a 
                  href={advocateData.phones.primaryTel} 
                  className="mobile-nav-cta"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone size={15} />
                  <span>Call 9980051736</span>
                </a>
                <a 
                  href={advocateData.whatsapp[0].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mobile-nav-cta cta-wa"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageSquare size={15} />
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
