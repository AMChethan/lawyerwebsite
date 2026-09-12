import React, { useState } from 'react';
import { Scale, Shield, Users, Landmark, ChevronRight, Briefcase, CheckCircle, MessageSquare } from 'lucide-react';
import { advocateData } from '../data/advocateData';

export const PracticeAreas = () => {
  const [activeArea, setActiveArea] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="practice-card-icon" size={32} strokeWidth={1.8} />;
      case 'Shield':
        return <Shield className="practice-card-icon" size={32} strokeWidth={1.8} />;
      case 'Users':
        return <Users className="practice-card-icon" size={32} strokeWidth={1.8} />;
      case 'Landmark':
        return <Landmark className="practice-card-icon" size={32} strokeWidth={1.8} />;
      default:
        return <Briefcase className="practice-card-icon" size={32} strokeWidth={1.8} />;
    }
  };

  const getWhatsAppInquiryUrl = (topic) => {
    const text = encodeURIComponent(`Hello Adv. Mallikarjunappa, I would like to consult regarding a ${topic} matter in Mysuru.`);
    return `https://wa.me/919980051736?text=${text}`;
  };

  return (
    <section className="practice-section section-padding" id="practice-areas">
      {/* Decorative law background overlay */}
      <div 
        className="practice-backdrop-pattern" 
        style={{ backgroundImage: `url(${advocateData.pillarsBgUrl})` }}
        aria-hidden="true"
      ></div>
      <div className="practice-backdrop-tint" aria-hidden="true"></div>

      <div className="container relative-z">
        <div className="section-header">
          <span className="section-tag">
            <Scale size={14} /> Courtroom Practice & Advocacy
          </span>
          <h2 className="section-title">Areas of Legal Practice</h2>
          <div className="section-divider">
            <div className="section-divider-line"></div>
            <div className="section-divider-diamond"></div>
            <div className="section-divider-line"></div>
          </div>
          <p className="section-subtitle">
            Over 25 years of proven courtroom defense, civil advocacy, and property law expertise before the District Court Mysore.
          </p>
        </div>

        <div className="practice-grid">
          {advocateData.practiceAreas.map((area, index) => (
            <div 
              key={area.id} 
              className={`practice-card ${activeArea === area.id ? 'practice-card-active' : ''}`}
              onMouseEnter={() => setActiveArea(area.id)}
              onMouseLeave={() => setActiveArea(null)}
            >
              <div className="practice-card-top">
                <div className="practice-icon-container">
                  {getIcon(area.icon)}
                </div>
                <div className="practice-card-badge-row">
                  <span className="practice-badge-pill">{area.badge}</span>
                  <span className="practice-card-num">0{index + 1}</span>
                </div>
              </div>

              <h3 className="practice-card-title">{area.title}</h3>
              <p className="practice-card-desc">{area.description}</p>

              {/* Key Sub-matters */}
              {area.details && (
                <div className="practice-card-details">
                  <span className="practice-details-title">Key Matters Handled:</span>
                  <ul className="practice-sublist">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="practice-subitem">
                        <CheckCircle size={13} className="text-gold subitem-icon" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="practice-card-action">
                <a 
                  href={getWhatsAppInquiryUrl(area.title)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="practice-inquire-link"
                >
                  <MessageSquare size={14} />
                  <span>Inquire on {area.shortTitle}</span>
                  <ChevronRight size={14} />
                </a>
              </div>

              <div className="practice-card-bottom-accent"></div>
            </div>
          ))}
        </div>

        <div className="practice-footer-note">
          <div className="footer-note-pill">
            <ChevronRight size={16} className="text-gold" />
            <span>{advocateData.practiceAreasFooterNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
