import React from 'react';
import { Scale, Shield, Users, Landmark, ChevronRight, Briefcase } from 'lucide-react';
import { advocateData } from '../data/advocateData';

export const PracticeAreas = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="practice-card-icon" size={32} strokeWidth={1.75} />;
      case 'Shield':
        return <Shield className="practice-card-icon" size={32} strokeWidth={1.75} />;
      case 'Users':
        return <Users className="practice-card-icon" size={32} strokeWidth={1.75} />;
      case 'Landmark':
        return <Landmark className="practice-card-icon" size={32} strokeWidth={1.75} />;
      default:
        return <Briefcase className="practice-card-icon" size={32} strokeWidth={1.75} />;
    }
  };

  return (
    <section className="practice-section section-padding" id="practice-areas">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={14} /> Legal Representation
          </span>
          <h2 className="section-title">Areas of Practice</h2>
          <div className="section-divider">
            <div className="section-divider-line"></div>
            <div className="section-divider-diamond"></div>
            <div className="section-divider-line"></div>
          </div>
          <p className="section-subtitle">
            Providing experienced legal counsel and representation in the District Court, Mysuru.
          </p>
        </div>

        <div className="practice-grid">
          {advocateData.practiceAreas.map((area, index) => (
            <div key={area.id} className="practice-card">
              <div className="practice-card-top">
                <div className="practice-icon-container">
                  {getIcon(area.icon)}
                </div>
                <span className="practice-card-num">0{index + 1}</span>
              </div>
              <h3 className="practice-card-title">{area.title}</h3>
              <p className="practice-card-desc">{area.description}</p>
              <div className="practice-card-line"></div>
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
