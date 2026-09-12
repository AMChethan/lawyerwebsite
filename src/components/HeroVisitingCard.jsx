import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Navigation, UserCheck, CheckCircle2, Shield, MapPin, Award, Clock, GraduationCap, Building2 } from 'lucide-react';
import { advocateData } from '../data/advocateData';
import { downloadVCard } from '../utils/vcard';

export const HeroVisitingCard = () => {
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [chamberStatus, setChamberStatus] = useState({ isOpen: false, label: 'Chamber Opens at 9:30 AM' });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday
      const hours = now.getHours() + now.getMinutes() / 60;

      if (day === 0) {
        setChamberStatus({ isOpen: false, label: 'Sunday Closed • Available on WhatsApp' });
        return;
      }

      if (hours >= 9.5 && hours <= 10.5) {
        setChamberStatus({ isOpen: true, label: 'Chamber Open Now (Morning Session)' });
      } else if (hours >= 18.0 && hours <= 21.0) {
        setChamberStatus({ isOpen: true, label: 'Chamber Open Now (Evening Session)' });
      } else if (hours > 10.5 && hours < 18.0) {
        setChamberStatus({ isOpen: false, label: 'Court Hours • Call / WhatsApp Available' });
      } else if (hours < 9.5) {
        setChamberStatus({ isOpen: false, label: 'Chamber Opens at 9:30 AM' });
      } else {
        setChamberStatus({ isOpen: false, label: 'Chamber Closed • Reopens 9:30 AM' });
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSaveContact = () => {
    const success = downloadVCard(advocateData);
    if (success) {
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3500);
    }
  };

  return (
    <section className="hero-section" id="visiting-card" aria-label="Digital Visiting Card">
      {/* Cinematic Legal Library Background Backdrop */}
      <div 
        className="hero-backdrop-image"
        style={{ backgroundImage: `url(${advocateData.heroBgUrl})` }}
        aria-hidden="true"
      ></div>
      <div className="hero-backdrop-overlay" aria-hidden="true"></div>

      <div className="container hero-container">
        <div className="visiting-card-wrapper">
          {/* Card Outer Ornamentation */}
          <div className="visiting-card-frame">
            <div className="corner-ornament top-left" aria-hidden="true"></div>
            <div className="corner-ornament top-right" aria-hidden="true"></div>
            <div className="corner-ornament bottom-left" aria-hidden="true"></div>
            <div className="corner-ornament bottom-right" aria-hidden="true"></div>

            <div className="visiting-card-body">
              {/* Left Column: Portrait Container & Badges */}
              <div className="card-portrait-col">
                <div className="portrait-frame">
                  <div className="portrait-inner">
                    <img 
                      src={advocateData.photoUrl} 
                      alt="Adv. Mallikarjunappa A S - Advocate & Notary in his Chamber"
                      className="advocate-portrait-img single-portrait-img"
                      loading="eager"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/advocate-office-profile.jpg";
                      }}
                    />
                    <div className="portrait-gradient-overlay" aria-hidden="true"></div>
                  </div>

                  {/* 25+ Years Experience Badge */}
                  <div className="portrait-badge">
                    <Award size={15} className="portrait-badge-icon text-gold" />
                    <span>25+ Years Experience</span>
                  </div>
                </div>

                {/* Live Chamber Status Pill */}
                <div className={`live-chamber-status ${chamberStatus.isOpen ? 'status-open-pill' : 'status-court-pill'}`}>
                  <span className="live-status-dot"></span>
                  <span className="live-status-text">{chamberStatus.label}</span>
                </div>
              </div>

              {/* Right Column: Information & Action Details */}
              <div className="card-details-col">
                <div className="advocate-header-meta">
                  <span className="court-jurisdiction">
                    <MapPin size={13} className="court-pin-icon" />
                    {advocateData.court}
                  </span>
                  <span className="qualifications-badge">
                    <GraduationCap size={13} className="badge-icon-inline" />
                    {advocateData.qualification}
                  </span>
                </div>

                <h1 className="advocate-main-name">
                  {advocateData.name}
                </h1>

                <p className="advocate-profession-title">
                  {advocateData.profession}
                </p>

                <p className="advocate-experience-tag">
                  {advocateData.experienceFull} • District Court Mysore
                </p>

                <p className="advocate-summary-quote">
                  "Dedicated legal defense, civil & property advocacy, and authorized notary public services with strict confidentiality and integrity."
                </p>

                <div className="card-details-separator"></div>

                {/* Primary Contact CTAs */}
                <div className="card-cta-group">
                  <a 
                    href={advocateData.phones.primaryTel} 
                    className="btn btn-primary cta-call"
                    id="hero-call-now-btn"
                    aria-label={`Call ${advocateData.displayName} directly at ${advocateData.phones.primaryFormatted}`}
                  >
                    <Phone size={18} className="cta-icon" />
                    <span>CALL 9980051736</span>
                  </a>

                  <a 
                    href={advocateData.whatsapp[0].url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp cta-whatsapp"
                    id="hero-whatsapp-btn"
                    aria-label="Chat on WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="cta-icon">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.274.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824zM12.012 2.002C6.48 2.002 2 6.48 2 12.012c0 1.954.563 3.778 1.543 5.323L2 22l4.823-1.492c1.488.905 3.228 1.433 5.093 1.433 5.531 0 10.012-4.48 10.012-10.012 0-5.532-4.481-10.012-10.012-10.012z"/>
                    </svg>
                    <span>WHATSAPP CHAT</span>
                  </a>
                </div>

                {/* Secondary Actions Row */}
                <div className="card-secondary-actions">
                  <a 
                    href={advocateData.office.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    id="hero-directions-btn"
                  >
                    <Navigation size={16} />
                    <span>VICHILA COMPLEX (MAP)</span>
                  </a>

                  <button 
                    type="button" 
                    onClick={handleSaveContact} 
                    className={`btn btn-secondary ${savedSuccess ? 'btn-saved' : ''}`}
                    id="hero-save-contact-btn"
                  >
                    {savedSuccess ? (
                      <>
                        <CheckCircle2 size={16} className="text-success" />
                        <span>CONTACT SAVED!</span>
                      </>
                    ) : (
                      <>
                        <UserCheck size={16} />
                        <span>SAVE TO PHONE</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Feature Ribbon */}
            <div className="visiting-card-ribbon">
              <div className="ribbon-item">
                <Shield size={14} className="ribbon-icon text-gold" />
                <span>Advocate & Notary</span>
              </div>
              <div className="ribbon-dot">•</div>
              <div className="ribbon-item">
                <Building2 size={14} className="ribbon-icon text-gold" />
                <span>District Court Mysore</span>
              </div>
              <div className="ribbon-dot">•</div>
              <div className="ribbon-item">
                <Clock size={14} className="ribbon-icon text-gold" />
                <span>Hours: 9:30–10:30 AM & 6:00–9:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
