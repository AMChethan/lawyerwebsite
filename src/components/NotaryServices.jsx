import React from 'react';
import { FileText, FileCheck, ScrollText, Handshake, ChevronRight, Stamp } from 'lucide-react';
import { advocateData } from '../data/advocateData';

export const NotaryServices = () => {
  const getNotaryIcon = (iconName) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="notary-card-icon" size={30} strokeWidth={1.75} />;
      case 'FileCheck':
        return <FileCheck className="notary-card-icon" size={30} strokeWidth={1.75} />;
      case 'ScrollText':
        return <ScrollText className="notary-card-icon" size={30} strokeWidth={1.75} />;
      case 'Handshake':
        return <Handshake className="notary-card-icon" size={30} strokeWidth={1.75} />;
      default:
        return <FileText className="notary-card-icon" size={30} strokeWidth={1.75} />;
    }
  };

  return (
    <section className="notary-section section-padding" id="notary-services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Stamp size={14} /> Official Attestation
          </span>
          <h2 className="section-title">Notary Services</h2>
          <div className="section-divider">
            <div className="section-divider-line"></div>
            <div className="section-divider-diamond"></div>
            <div className="section-divider-line"></div>
          </div>
          <p className="section-subtitle">
            Authorized notary authentication, sworn affidavits, and legal verification services.
          </p>
        </div>

        <div className="notary-grid">
          {advocateData.notaryServices.map((service) => (
            <div key={service.id} className="notary-card">
              <div className="notary-icon-badge">
                {getNotaryIcon(service.icon)}
              </div>
              <div className="notary-card-content">
                <h3 className="notary-card-title">{service.title}</h3>
                <p className="notary-card-desc">{service.description}</p>
              </div>
              <div className="notary-corner-accent" aria-hidden="true"></div>
            </div>
          ))}
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
