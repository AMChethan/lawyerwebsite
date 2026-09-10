import React, { useState } from 'react';
import { Phone, MessageSquare, UserCheck, CheckCircle2, QrCode, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { advocateData } from '../data/advocateData';
import { downloadVCard } from '../utils/vcard';

export const ContactSection = ({ onOpenQR }) => {
  const [vcardDownloaded, setVcardDownloaded] = useState(false);

  const handleSaveContact = () => {
    const success = downloadVCard(advocateData);
    if (success) {
      setVcardDownloaded(true);
      setTimeout(() => setVcardDownloaded(false), 4000);
    }
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Phone size={14} /> Direct Accessibility
          </span>
          <h2 className="section-title">Contact & Communication</h2>
          <div className="section-divider">
            <div className="section-divider-line"></div>
            <div className="section-divider-diamond"></div>
            <div className="section-divider-line"></div>
          </div>
          <p className="section-subtitle">
            Get in touch directly for legal consultations and notarial document verifications.
          </p>
        </div>

        <div className="contact-grid">
          {/* Primary Phone Card */}
          <div className="contact-card contact-card-primary">
            <div className="contact-card-header">
              <div className="contact-icon-pill">
                <Phone size={22} />
              </div>
              <span className="contact-type-label">Direct Voice Call</span>
            </div>

            <div className="contact-card-body">
              <h3 className="contact-number-display">{advocateData.phones.primaryFormatted}</h3>
              <p className="contact-card-sub">Available during chamber office hours (9:30–10:30 AM & 6:00–9:00 PM)</p>
            </div>

            <div className="contact-card-footer">
              <a 
                href={advocateData.phones.primaryTel} 
                className="btn btn-primary contact-action-btn"
                id="contact-call-btn"
              >
                <Phone size={18} />
                <span>CALL 9980051736</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* WhatsApp Cards Container */}
          <div className="contact-card contact-card-whatsapp">
            <div className="contact-card-header">
              <div className="contact-icon-pill whatsapp-pill">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.274.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824zM12.012 2.002C6.48 2.002 2 6.48 2 12.012c0 1.954.563 3.778 1.543 5.323L2 22l4.823-1.492c1.488.905 3.228 1.433 5.093 1.433 5.531 0 10.012-4.48 10.012-10.012 0-5.532-4.481-10.012-10.012-10.012z"/>
                </svg>
              </div>
              <span className="contact-type-label">Instant WhatsApp Messaging</span>
            </div>

            <div className="contact-whatsapp-list">
              {advocateData.whatsapp.map((wa, idx) => (
                <div key={wa.number} className="whatsapp-item-row">
                  <div className="wa-info">
                    <span className="wa-label">{wa.label}</span>
                    <strong className="wa-number">{wa.formatted}</strong>
                  </div>
                  <a 
                    href={wa.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp-sm"
                    id={`contact-whatsapp-${idx+1}-btn`}
                    aria-label={`Open WhatsApp chat with ${wa.number}`}
                  >
                    <span>Message</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Save Contact & QR Share Strip */}
        <div className="save-contact-strip">
          <div className="save-strip-info">
            <h3 className="save-strip-title">Save Visiting Card to Your Mobile Device</h3>
            <p className="save-strip-desc">
              Download the official contact card (.vcf) with all phone numbers, chamber address & professional details.
            </p>
          </div>

          <div className="save-strip-actions">
            <button 
              type="button" 
              onClick={handleSaveContact} 
              className={`btn btn-save-vcf ${vcardDownloaded ? 'btn-saved-vcf' : ''}`}
              id="save-contact-vcf-btn"
            >
              {vcardDownloaded ? (
                <>
                  <CheckCircle2 size={20} className="text-success" />
                  <span>Contact Card Downloaded!</span>
                </>
              ) : (
                <>
                  <UserCheck size={20} />
                  <span>SAVE CONTACT (.VCF)</span>
                </>
              )}
            </button>

            <button 
              type="button" 
              onClick={onOpenQR} 
              className="btn btn-qr-share"
              id="show-qr-code-btn"
            >
              <QrCode size={20} />
              <span>Show QR Code</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
