import React, { useState } from 'react';
import { MapPin, Clock, Navigation, Phone, Building, Calendar, ExternalLink } from 'lucide-react';
import { advocateData } from '../data/advocateData';

export const OfficeLocation = () => {
  const [isOpenNow] = useState(() => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday
    const hours = now.getHours() + now.getMinutes() / 60;
    const isMorningSession = hours >= 9.5 && hours <= 10.5;
    const isEveningSession = hours >= 18.0 && hours <= 21.0;
    return day !== 0 && (isMorningSession || isEveningSession);
  });

  return (
    <section className="office-section section-padding" id="office">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Building size={14} /> Visit The Chamber
          </span>
          <h2 className="section-title">Office Location & Office Hours</h2>
          <div className="section-divider">
            <div className="section-divider-line"></div>
            <div className="section-divider-diamond"></div>
            <div className="section-divider-line"></div>
          </div>
          <p className="section-subtitle">
            Centrally located chamber in Saraswathipuram, Mysuru for consultations and legal documentation.
          </p>
        </div>

        <div className="office-layout-grid">
          {/* Office Details Card */}
          <div className="office-card">
            <div className="office-card-header">
              <div className="office-badge-wrapper">
                <span className="office-type-pill">Advocate & Notary Chamber</span>
                <span className={`status-pill ${isOpenNow ? 'status-open' : 'status-closed'}`}>
                  <span className="status-dot"></span>
                  {isOpenNow ? 'Office Open Now' : 'Chamber Office Hours'}
                </span>
              </div>
              <h3 className="office-chamber-title">Mysuru Legal Office</h3>
            </div>

            <div className="office-info-list">
              {/* Address Item */}
              <div className="office-info-item">
                <div className="info-icon-container">
                  <MapPin size={22} className="text-gold" />
                </div>
                <div className="info-content-col">
                  <strong className="info-heading">Chamber Address</strong>
                  <p className="info-address-line">{advocateData.office.building}</p>
                  <p className="info-address-line">{advocateData.office.street}</p>
                  <p className="info-address-line">{advocateData.office.area}</p>
                  <p className="info-address-line">{advocateData.office.city}, {advocateData.office.state} – {advocateData.office.pincode}</p>
                </div>
              </div>

              {/* Office Hours Item */}
              <div className="office-info-item">
                <div className="info-icon-container">
                  <Clock size={22} className="text-gold" />
                </div>
                <div className="info-content-col">
                  <strong className="info-heading">Office Hours</strong>
                  <p className="info-hours-text">{advocateData.office.officeHours}</p>
                  <p className="info-days-text">
                    <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                    {advocateData.office.workingDays} (Morning: 9:30–10:30 AM | Evening: 6:00–9:00 PM)
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="office-card-actions">
              <a 
                href={advocateData.office.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary office-btn-directions"
                id="office-get-directions-btn"
              >
                <Navigation size={18} />
                <span>GET DIRECTIONS</span>
                <ExternalLink size={14} style={{ opacity: 0.7 }} />
              </a>

              <a 
                href={advocateData.phones.primaryTel} 
                className="btn btn-outline office-btn-call"
                id="office-call-btn"
              >
                <Phone size={18} />
                <span>CALL OFFICE</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="office-map-wrapper">
            <div className="map-frame">
              <iframe
                title="Office Location Map - Saraswathipuram Mysuru"
                src="https://maps.google.com/maps?q=Vichila+Complex,+New+Kantharaj+Urs+Rd,+K.G.+Koppal,+Saraswathipuram,+Mysuru,+Karnataka+570009&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-overlay-badge">
                <MapPin size={16} className="text-gold" />
                <span>Vichila Complex, Saraswathipuram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
