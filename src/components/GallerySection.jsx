import React, { useState, useEffect } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Scale, Landmark, BookOpen, ShieldCheck, MapPin, Phone, MessageSquare } from 'lucide-react';
import { advocateData } from '../data/advocateData';

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const categories = ['All', 'Court Complex', 'Law Chamber', 'Legal Research', 'Notary Services'];
  const items = advocateData.galleryItems || [];

  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  // Handle ESC key and arrow keys for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredItems.length]);

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentModalItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Camera size={14} /> Chamber & Judicial Heritage
          </span>
          <h2 className="section-title">Legal Practice & Court Gallery</h2>
          <p className="section-subtitle">
            Visual glimpses of District Court Mysore standing, private consultation chambers, and authorized notary practice.
          </p>
          <div className="section-divider">
            <div className="section-divider-line"></div>
            <div className="section-divider-diamond"></div>
            <div className="section-divider-line"></div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="gallery-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'Court Complex' && <Landmark size={14} />}
              {cat === 'Law Chamber' && <Scale size={14} />}
              {cat === 'Legal Research' && <BookOpen size={14} />}
              {cat === 'Notary Services' && <ShieldCheck size={14} />}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-cards-grid">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className="gallery-item-card"
              onClick={() => setActiveImageIndex(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setActiveImageIndex(idx); }}
            >
              <div className="gallery-media-frame">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="gallery-img-elem"
                  loading="lazy"
                />
                <div className="gallery-overlay-gradient"></div>
                <div className="gallery-badge-tag">
                  <span>{item.badge}</span>
                </div>
                <div className="gallery-zoom-action">
                  <ZoomIn size={18} />
                  <span>Enlarge View</span>
                </div>
              </div>

              <div className="gallery-info-body">
                <div className="gallery-tags-row">
                  {item.tags?.map((tag, tIdx) => (
                    <span key={tIdx} className="gallery-micro-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="gallery-card-title">{item.title}</h3>
                <p className="gallery-card-caption">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chamber Consultation Callout Banner */}
        <div className="gallery-bottom-banner">
          <div className="banner-left">
            <div className="banner-icon-circle">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="banner-title">Visit Advocate & Notary Chamber in Mysuru</h4>
              <p className="banner-sub">
                Chamber at Vichila Complex, 1st Floor, Saraswathipuram • Morning: 9:30–10:30 AM & Evening: 6:00–9:00 PM
              </p>
            </div>
          </div>
          <div className="banner-actions">
            <a href={advocateData.whatsapp?.[0]?.url} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm">
              <MessageSquare size={16} /> WhatsApp Inquiry
            </a>
            <a href={advocateData.phones?.primaryTel} className="btn btn-outline-navy btn-sm">
              <Phone size={16} /> Call Chamber
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {currentModalItem && (
        <div className="gallery-lightbox-overlay" onClick={() => setActiveImageIndex(null)}>
          <div className="gallery-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close-btn" 
              onClick={() => setActiveImageIndex(null)}
              aria-label="Close Fullscreen View"
            >
              <X size={24} />
            </button>

            <button 
              className="lightbox-nav-btn prev-btn" 
              onClick={handlePrev}
              aria-label="Previous Photo"
            >
              <ChevronLeft size={28} />
            </button>

            <button 
              className="lightbox-nav-btn next-btn" 
              onClick={handleNext}
              aria-label="Next Photo"
            >
              <ChevronRight size={28} />
            </button>

            <div className="lightbox-image-box">
              <img 
                src={currentModalItem.imageUrl} 
                alt={currentModalItem.title} 
                className="lightbox-full-img"
              />
            </div>

            <div className="lightbox-details-box">
              <div className="lightbox-header-row">
                <span className="lightbox-badge">{currentModalItem.badge}</span>
                <span className="lightbox-counter">
                  {activeImageIndex + 1} / {filteredItems.length}
                </span>
              </div>
              <h3 className="lightbox-title">{currentModalItem.title}</h3>
              <p className="lightbox-desc">{currentModalItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
