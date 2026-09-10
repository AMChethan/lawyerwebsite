import React from 'react';
import { GraduationCap, Award, Landmark, Briefcase, FileBadge } from 'lucide-react';
import { advocateData } from '../data/advocateData';

export const ProfessionalInfo = () => {
  const infoItems = [
    {
      label: "Qualification",
      value: advocateData.qualification,
      detail: "Bachelor of Commerce & Law",
      icon: <GraduationCap size={24} className="info-icon" />
    },
    {
      label: "Experience",
      value: advocateData.experience,
      detail: "Over 25 years of active legal practice",
      icon: <Award size={24} className="info-icon" />
    },
    {
      label: "Jurisdiction & Practice",
      value: advocateData.court,
      detail: "Mysuru Bar & Legal Community",
      icon: <Landmark size={24} className="info-icon" />
    },
    {
      label: "Profession",
      value: advocateData.profession,
      detail: "Legal Counsel & Authorized Notary",
      icon: <Briefcase size={24} className="info-icon" />
    }
  ];

  return (
    <section className="pro-info-section section-padding" id="professional-info">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <FileBadge size={14} /> Credentials
          </span>
          <h2 className="section-title">Professional Information</h2>
          <div className="section-divider">
            <div className="section-divider-line"></div>
            <div className="section-divider-diamond"></div>
            <div className="section-divider-line"></div>
          </div>
        </div>

        <div className="pro-card-container">
          <div className="pro-visiting-plaque">
            <div className="plaque-inner">
              <div className="plaque-header">
                <div className="plaque-emblem">⚖</div>
                <div className="plaque-title-block">
                  <h3 className="plaque-advocate-name">{advocateData.displayName}</h3>
                  <span className="plaque-sub">{advocateData.profession} • {advocateData.location}</span>
                </div>
              </div>

              <div className="plaque-grid">
                {infoItems.map((item, index) => (
                  <div key={index} className="plaque-grid-item">
                    <div className="plaque-icon-wrap">
                      {item.icon}
                    </div>
                    <div className="plaque-content">
                      <span className="plaque-label">{item.label}</span>
                      <strong className="plaque-value">{item.value}</strong>
                      <span className="plaque-detail">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
