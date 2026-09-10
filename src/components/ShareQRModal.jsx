import React, { useState } from 'react';
import { X, Copy, Check, Share2, Download, Scale } from 'lucide-react';
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
    <div className="qr-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="qr-modal-title">
      <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="qr-modal-close" 
          onClick={onClose}
          aria-label="Close QR Modal"
        >
          <X size={20} />
        </button>

        <div className="qr-modal-header">
          <div className="qr-modal-emblem">
            <Scale size={24} className="text-gold" />
          </div>
          <h3 id="qr-modal-title" className="qr-modal-title">{advocateData.displayName}</h3>
          <p className="qr-modal-subtitle">{advocateData.profession} • Mysuru</p>
        </div>

        {/* QR Box */}
        <div className="qr-code-box">
          <QRCodeSVG 
            value={currentUrl}
            size={180}
            bgColor={"#FFFFFF"}
            fgColor={"#0C1929"}
            level={"M"}
            includeMargin={true}
          />
          <p className="qr-scan-instruction">Scan with smartphone camera to view digital visiting card</p>
        </div>

        {/* Quick action buttons in modal */}
        <div className="qr-modal-actions">
          <button 
            type="button" 
            onClick={handleCopyLink} 
            className="btn btn-outline qr-action-btn"
          >
            {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
            <span>{copied ? 'Link Copied!' : 'Copy Web Link'}</span>
          </button>

          <button 
            type="button" 
            onClick={() => downloadVCard(advocateData)} 
            className="btn btn-primary qr-action-btn"
          >
            <Download size={16} />
            <span>Download .VCF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
