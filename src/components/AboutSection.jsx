import React from 'react';
import { Scale, Clock, Award, ShieldCheck, Landmark, Briefcase, FileCheck } from 'lucide-react';
import { advocateData } from '../data/advocateData';

export const AboutSection = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Scale size={14} /> Professional Profile
          </span>
          <h2 className="section-title">About My Legal Practice</h2>
          <div className="section-divider">
            <div className="section-divider-line"></div>
            <div className="section-divider-diamond"></div>
            <div className="section-divider-line"></div>
          </div>
        </div>

        <div className="about-grid-layout">
          {/* Left Column: Narrative Card & 3 Pillars */}
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

          {/* Right Column: Court Complex Card + Law & Business Creed Plaque */}
          <div className="about-visual-col">
            {/* Card 1: Law Courts Mysore */}
            <div className="about-emblem-card">
              <div className="emblem-card-media">
                <img 
                  src={advocateData.courtBuildingPhotoUrl || advocateData.courtPhotoUrl || "/images/mysore-district-court-building.jpg"} 
                  alt="Law Courts Mysore - District & Sessions Court, Mysuru" 
                  className="emblem-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/mysore-district-court.jpg";
                  }}
                />
                <div className="emblem-media-overlay" aria-hidden="true"></div>
                <div className="emblem-media-badge">
                  <Landmark size={14} />
                  <span>Law Courts Mysore</span>
                </div>
              </div>
              <div className="emblem-card-content">
                <h3 className="emblem-card-title">Law Courts Mysore</h3>
                <p className="emblem-card-motto">
                  <em>"Justice, Equality & The Rule of Law — Defending Rights with Proven Experience."</em>
                </p>
                <div className="emblem-card-highlights">
                  <div className="emblem-highlight-item">
                    <span className="emblem-dot">🏛️</span>
                    <span>Principal District & Sessions Court jurisdiction</span>
                  </div>
                  <div className="emblem-highlight-item">
                    <span className="emblem-dot">⚖️</span>
                    <span>25+ Years continuous trial practice & advocacy</span>
                  </div>
                  <div className="emblem-highlight-item">
                    <span className="emblem-dot">📜</span>
                    <span>Authorized official notary chamber</span>
                  </div>
                  <div className="emblem-highlight-item">
                    <span className="emblem-dot">📍</span>
                    <span>Civil, Criminal, Family & Property litigation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Simple & Strong Legal Motto Card */}
            <div className="about-creed-card">
              <div className="creed-card-header">
                <div className="creed-badge">
                  <Scale size={13} />
                  <span>Legal Practice Motto</span>
                </div>
                <span className="creed-tag-latin">Truth • Justice • Client Trust</span>
              </div>
              
              <p className="creed-slogan-main">
                "Protecting Your Rights with Experience, Honesty & Dedicated Counsel."
              </p>

              <div className="creed-points-list">
                <div className="creed-point">
                  <span className="creed-icon">⚖️</span>
                  <div>
                    <strong>Strong & Fair Representation:</strong>
                    <span> Standing firmly with clients to protect their legal rights in every court matter.</span>
                  </div>
                </div>

                <div className="creed-point">
                  <span className="creed-icon">📜</span>
                  <div>
                    <strong>Honest Legal Guidance:</strong>
                    <span> Giving clear case evaluations, practical advice, and trustworthy solutions.</span>
                  </div>
                </div>

                <div className="creed-point">
                  <span className="creed-icon">🏛️</span>
                  <div>
                    <strong>Trusted Notary Chamber:</strong>
                    <span> Providing fast, accurate affidavits, agreements, and official document attestations.</span>
                  </div>
                </div>
              </div>

              <div className="creed-signoff">
                <span className="creed-sign-name">Adv. Mallikarjunappa A S</span>
                <span className="creed-sign-cred">B.Com, LL.B. • Advocate & Notary • 25+ Years Experience in Mysuru</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


