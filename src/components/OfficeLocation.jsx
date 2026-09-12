import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Navigation, Phone, Building, Calendar, ExternalLink, MessageSquare, CheckCircle } from 'lucide-react';
import { advocateData } from '../data/advocateData';

export const OfficeLocation = () => {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [sessionText, setSessionText] = useState('');

  useEffect(() => {
    const updateTiming = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday
      const hours = now.getHours() + now.getMinutes() / 60;

      if (day === 0) {
        setIsOpenNow(false);
        setSessionText('Closed on Sunday (Available for urgent inquiries on WhatsApp)');
        return;
      }

      const isMorning = hours >= 9.5 && hours <= 10.5;
      const isEvening = hours >= 18.0 && hours <= 21.0;

      if (isMorning) {
        setIsOpenNow(true);
        setSessionText('Morning Chamber Session Active (Open until 10:30 AM)');
      } else if (isEvening) {
        setIsOpenNow(true);
        setSessionText('Evening Chamber Session Active (Open until 9:00 PM)');
      } else if (hours > 10.5 && hours < 18.0) {
        setIsOpenNow(false);
        setSessionText('Court Advocacy Hours (Reopens for Chamber at 6:00 PM)');
      } else if (hours < 9.5) {
        setIsOpenNow(false);
        setSessionText('Chamber Opens at 9:30 AM');
      } else {
        setIsOpenNow(false);
        setSessionText('Chamber Closed for the Day (Reopens 9:30 AM Tomorrow)');
      }
    };

    updateTiming();
    const timer = setInterval(updateTiming, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="office-section section-padding" id="office">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Building size={14} /> Chamber & Jurisdiction
          </span>
          <h2 className="section-title">Chamber Location & Office Hours</h2>
          <div className="section-divider">
            <div className="section-divider-line"></div>
            <div className="section-divider-diamond"></div>
            <div className="section-divider-line"></div>
          </div>
          <p className="section-subtitle">
            Conveniently situated at Vichila Complex, 1st Floor in Saraswathipuram, Mysuru for in-person legal consultation and official notarization.
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
                  {isOpenNow ? 'Chamber Open Now' : 'Chamber Schedule'}
                </span>
              </div>
              <h3 className="office-chamber-title">Vichila Complex Chamber</h3>
              <p className="office-chamber-subtitle">{sessionText}</p>
            </div>

            <div className="office-info-list">
              {/* Address Item */}
              <div className="office-info-item">
                <div className="info-icon-container">
                  <MapPin size={22} className="text-gold" />
                </div>
                <div className="info-content-col">
                  <strong className="info-heading">Full Chamber Address</strong>
                  <p className="info-address-line primary-loc-name"><strong>Vichila Complex, 1st Floor</strong></p>
                  <p className="info-address-line">New Kantharaj Urs Rd, K.G Koppal</p>
                  <p className="info-address-line">Saraswathipuram, Mysuru, Karnataka – 570009</p>
                  <span className="info-landmark-tag">Near Saraswathipuram / K.G Koppal Junction</span>
                </div>
              </div>

              {/* Office Hours Item */}
              <div className="office-info-item">
                <div className="info-icon-container">
                  <Clock size={22} className="text-gold" />
                </div>
                <div className="info-content-col">
                  <strong className="info-heading">Chamber Consultation Timings</strong>
                  <div className="timing-slots-grid">
                    <div className="timing-slot-badge">
                      <span className="slot-title">Morning Session</span>
                      <strong className="slot-time">9:30 AM – 10:30 AM</strong>
                    </div>
                    <div className="timing-slot-badge">
                      <span className="slot-title">Evening Session</span>
                      <strong className="slot-time">6:00 PM – 9:00 PM</strong>
                    </div>
                  </div>
                  <p className="info-days-text">
                    <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                    {advocateData.office.workingDays} (Court hours during mid-day)
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
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink size={14} style={{ opacity: 0.8 }} />
              </a>

              <a 
                href={advocateData.phones.primaryTel} 
                className="btn btn-outline office-btn-call"
                id="office-call-btn"
              >
                <Phone size={18} />
                <span>CALL 9980051736</span>
              </a>

              <a 
                href={advocateData.whatsapp[0].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp-card"
                id="office-whatsapp-btn"
              >
                <MessageSquare size={18} />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="office-map-wrapper">
            <div className="map-frame">
              <iframe
                title="Vichila Complex 1st Floor Saraswathipuram Mysuru"
                src="https://maps.google.com/maps?q=Vichila+Complex,+New+Kantharaj+Urs+Rd,+K.G.+Koppal,+Saraswathipuram,+Mysuru,+Karnataka+570009&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-overlay-badge">
                <MapPin size={16} className="text-gold" />
                <span>Vichila Complex, 1st Floor, Saraswathipuram</span>
              </div>
            </div>

            <div className="map-caption-bar">
              <span className="map-caption-text">
                <CheckCircle size={14} className="text-gold" />
                Google Maps Link: <a href={advocateData.office.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="map-link-inline">share.google/9mvl5e0fbC6MDRZmW</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
