import React, { useState } from 'react';
import { FileText, FileCheck, ScrollText, Handshake, ChevronRight, Stamp, CheckSquare, MessageSquare, AlertCircle } from 'lucide-react';
import { advocateData } from '../data/advocateData';

export const NotaryServices = () => {
  const [selectedService, setSelectedService] = useState('affidavits');

  const getNotaryIcon = (iconName) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="notary-card-icon" size={28} strokeWidth={1.8} />;
      case 'FileCheck':
        return <FileCheck className="notary-card-icon" size={28} strokeWidth={1.8} />;
      case 'ScrollText':
        return <ScrollText className="notary-card-icon" size={28} strokeWidth={1.8} />;
      case 'Handshake':
        return <Handshake className="notary-card-icon" size={28} strokeWidth={1.8} />;
      default:
        return <FileText className="notary-card-icon" size={28} strokeWidth={1.8} />;
    }
  };

  const getWhatsAppNotaryUrl = (serviceName) => {
    const text = encodeURIComponent(`Hello Adv. Mallikarjunappa, I need official Notary assistance for ${serviceName} at your Vichila Complex chamber.`);
    return `https://wa.me/919980051736?text=${text}`;
  };

  return (
    <section className="notary-section section-padding" id="notary-services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Stamp size={14} /> Official Notary Public Chamber
          </span>
          <h2 className="section-title">Authorized Notary Services</h2>
          <div className="section-divider">
            <div className="section-divider-line"></div>
            <div className="section-divider-diamond"></div>
            <div className="section-divider-line"></div>
          </div>
          <p className="section-subtitle">
            Government-authorized Notary Public chamber at Saraswathipuram, Mysuru for sworn oaths, true copies, legal instruments, and attestations.
          </p>
        </div>

        <div className="notary-grid">
          {advocateData.notaryServices.map((service) => (
            <div 
              key={service.id} 
              className={`notary-card ${selectedService === service.id ? 'notary-card-selected' : ''}`}
              onClick={() => setSelectedService(service.id)}
            >
              <div className="notary-card-header">
                <div className="notary-icon-badge">
                  {getNotaryIcon(service.icon)}
                </div>
                <span className="notary-service-tag">Authorized Notary</span>
              </div>

              <div className="notary-card-content">
                <h3 className="notary-card-title">{service.title}</h3>
                <p className="notary-card-desc">{service.description}</p>
                
                {/* Requirements Callout */}
                <div className="notary-requirements-box">
                  <div className="req-title-row">
                    <CheckSquare size={13} className="text-gold" />
                    <strong>What to Bring:</strong>
                  </div>
                  <p className="req-text">{service.requirements}</p>
                </div>
              </div>

              <div className="notary-card-action-row">
                <a 
                  href={getWhatsAppNotaryUrl(service.title)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MessageSquare size={13} />
                  <span>Book for {service.shortTitle}</span>
                </a>
              </div>

              <div className="notary-corner-accent" aria-hidden="true"></div>
            </div>
          ))}
        </div>

        {/* Notary Chamber Quick Notice Box */}
        <div className="notary-quick-notice">
          <div className="notice-icon-wrap">
            <AlertCircle size={22} className="text-gold" />
          </div>
          <div className="notice-content">
            <h4 className="notice-title">Visiting the Notary Chamber at Vichila Complex</h4>
            <p className="notice-desc">
              Chamber consultations for notary attestation and affidavits are available during <strong>9:30 AM – 10:30 AM</strong> and <strong>6:00 PM – 9:00 PM</strong> (Monday – Saturday). Please bring government-issued original photo ID proofs (Aadhaar / Passport / Voter ID) for attestation.
            </p>
          </div>
          <a 
            href={advocateData.phones.primaryTel} 
            className="btn btn-outline btn-notice-call"
          >
            <span>Call Chamber: 9980051736</span>
          </a>
        </div>

        <div className="notary-footer-note">
          <div className="footer-note-pill notary-pill">
            <ChevronRight size={16} className="text-gold" />
            <span>{advocateData.notaryServicesFooterNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
