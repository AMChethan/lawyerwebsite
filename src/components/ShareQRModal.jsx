import React, { useState } from 'react';
import { X, Copy, Check, Download, Scale, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { advocateData } from '../data/advocateData';
import { downloadVCard } from '../utils/vcard';

export const ShareQRModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://advmallikarjunappa.in';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="qr-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="qr-modal-title">
      <div className="qr-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="qr-modal-close" 
          onClick={onClose}
          aria-label="Close QR Modal"
        >
          <X size={20} />
        </button>

        <div className="plaque-emblem" style={{ margin: '0 auto 1rem', width: '48px', height: '48px', fontSize: '1.4rem' }}>
          ⚖
        </div>

        <h3 id="qr-modal-title" className="qr-modal-title">{advocateData.displayName}</h3>
        <p className="qr-modal-subtitle">{advocateData.profession} • {advocateData.court}</p>

        {/* QR Code Container */}
        <div className="qr-code-frame">
          <QRCodeSVG 
            value={currentUrl}
            size={180}
            bgColor={"#FFFFFF"}
            fgColor={"#07101B"}
            level={"M"}
            includeMargin={true}
          />
        </div>

        <div className="qr-card-advocate-info">
          <p className="qr-card-name">{advocateData.name}</p>
          <p className="qr-card-title">📞 9980051736 | 8073542848</p>
          <p style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px', marginBottom: 0 }}>
            Chamber Hours: 9:30–10:30 AM & 6:00–9:00 PM
          </p>
        </div>

        <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '1.25rem' }}>
          Scan with mobile camera to open digital visiting card on phone
        </p>

        {/* Quick Actions */}
        <div className="qr-modal-actions">
          <button 
            type="button" 
            onClick={handleCopyLink} 
            className="btn btn-outline"
          >
            {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>

          <button 
            type="button" 
            onClick={() => downloadVCard(advocateData)} 
            className="btn btn-primary"
          >
            <Download size={16} />
            <span>Save .VCF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
