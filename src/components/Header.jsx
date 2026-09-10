import React, { useState, useEffect } from 'react';
import { Scale, Phone, QrCode, Menu, X } from 'lucide-react';
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
    { label: 'Office & Hours', href: '#office' },
  ];

  const mobileNavLinks = [
    { label: 'About', href: '#about' },
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'Notary Services', href: '#notary-services' },
    { label: 'Professional Information', href: '#professional-info' },
    { label: 'Office Location & Hours', href: '#office' },
    { label: 'Contact & Communication', href: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="header-brand" aria-label="Adv. Mallikarjunappa A S Homepage">
          <div className="brand-icon-wrapper">
            <Scale className="brand-scale-icon" size={22} strokeWidth={2.2} />
          </div>
          <div className="brand-text">
            <span className="brand-name">{advocateData.displayName}</span>
            <span className="brand-title">{advocateData.profession}</span>
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
            title="View QR Code & Share"
            aria-label="View QR Code"
          >
            <QrCode size={18} />
            <span className="qr-btn-text">QR Card</span>
          </button>

          <a 
            href={advocateData.phones.primaryTel} 
            className="header-call-btn"
            aria-label={`Call ${advocateData.phones.primaryFormatted}`}
          >
            <Phone size={15} />
            <span>Call</span>
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
            {mobileNavLinks.map((link) => (
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

            <a 
              href={advocateData.phones.primaryTel} 
              className="mobile-nav-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone size={18} />
              <span>Call: {advocateData.phones.primaryFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
