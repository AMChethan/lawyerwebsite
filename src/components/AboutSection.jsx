import React from 'react';
import { Scale, BookOpen, Clock, Award, ShieldCheck, Shield } from 'lucide-react';
import { advocateData } from '../data/advocateData';

export const AboutSection = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Scale size={14} /> Professional Profile
          </span>
          <h2 className="section-title">About My Practice</h2>
          <div className="section-divider">
            <div className="section-divider-line"></div>
            <div className="section-divider-diamond"></div>
            <div className="section-divider-line"></div>
          </div>
        </div>

        <div className="about-grid-layout">
          {/* Left Column: Narrative Card */}
          <div className="about-card">
            <div className="about-quote-mark" aria-hidden="true">“</div>
            <p className="about-lead-text">
              {advocateData.about?.lead}
            </p>
            <div className="about-quote-mark end-quote" aria-hidden="true">”</div>

            <div className="about-narrative-block">
              <p className="about-body-p about-p-highlight">
                {advocateData.about?.statement}
              </p>
              <p className="about-body-p">
                {advocateData.about?.subStatement}
              </p>
            </div>

            <div className="about-pillars-grid">
              <div className="about-pillar-item">
                <div className="pillar-icon-box">
                  <Clock size={20} />
                </div>
                <div className="pillar-text">
                  <h3 className="pillar-title">25+ Years Experience</h3>
                  <p className="pillar-desc">Seasoned courtroom advocacy & litigation standing at Mysuru Bar.</p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-icon-box">
                  <Scale size={20} />
                </div>
                <div className="pillar-text">
                  <h3 className="pillar-title">Personalized Counsel</h3>
                  <p className="pillar-desc">Direct, client-focused attention on every legal & court matter.</p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-icon-box">
                  <ShieldCheck size={20} />
                </div>
                <div className="pillar-text">
                  <h3 className="pillar-title">Notary Chamber</h3>
                  <p className="pillar-desc">Prompt, official affidavits, agreements & document attestations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Legal Heritage & Law God Showcase */}
          <div className="about-visual-col">
            <div className="about-emblem-card">
              <div className="emblem-card-media">
                <img 
                  src={advocateData.scalesImageUrl || "/images/scales-gavel-law.png"} 
                  alt="Scales of Justice and Gavel on Law Books" 
                  className="emblem-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/scales-gavel-law.jpg";
                  }}
                />
                <div className="emblem-media-overlay" aria-hidden="true"></div>
                <div className="emblem-media-badge">
                  <Shield size={14} />
                  <span>Emblem of Justice</span>
                </div>
              </div>
              <div className="emblem-card-content">
                <h3 className="emblem-card-title">Steadfast Legal Representation</h3>
                <p className="emblem-card-motto">
                  <em>"Fiat justitia ruat caelum"</em> — Let justice be done though the heavens fall.
                </p>
                <div className="emblem-card-highlights">
                  <div className="emblem-highlight-item">
                    <span className="emblem-dot">⚖️</span>
                    <span>Truthful & transparent case evaluations</span>
                  </div>
                  <div className="emblem-highlight-item">
                    <span className="emblem-dot">🏛️</span>
                    <span>District Court, Mysuru jurisdiction</span>
                  </div>
                  <div className="emblem-highlight-item">
                    <span className="emblem-dot">📜</span>
                    <span>Authorized official notary chamber</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
