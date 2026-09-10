import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroVisitingCard } from './components/HeroVisitingCard';
import { AboutSection } from './components/AboutSection';
import { PracticeAreas } from './components/PracticeAreas';
import { NotaryServices } from './components/NotaryServices';
import { ProfessionalInfo } from './components/ProfessionalInfo';
import { OfficeLocation } from './components/OfficeLocation';
import { ContactSection } from './components/ContactSection';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ShareQRModal } from './components/ShareQRModal';
import { Footer } from './components/Footer';
import './styles/App.css';

export function App() {
  const [isQROpen, setIsQROpen] = useState(false);

  return (
    <div className="app-layout">
      {/* Header with Navigation & Quick Phone CTA */}
      <Header onOpenQR={() => setIsQROpen(true)} />

      <main id="main-content">
        {/* Hero Section / Digital Visiting Card */}
        <HeroVisitingCard />

        {/* About Section - Brief, Authentic Summary */}
        <AboutSection />

        {/* Practice Areas - Civil, Criminal, Family, Property */}
        <PracticeAreas />

        {/* Notary Services - Affidavits, Attestation, POA, Agreements */}
        <NotaryServices />

        {/* Professional Info - Credentials Plaque */}
        <ProfessionalInfo />

        {/* Office Location & Working Hours */}
        <OfficeLocation />

        {/* Contact Section - Phones, Both WhatsApps & vCard Save */}
        <ContactSection onOpenQR={() => setIsQROpen(true)} />
      </main>

      {/* Footer with BCI compliance notice */}
      <Footer />

      {/* Mobile Sticky Bottom Quick Action Bar */}
      <MobileStickyBar />

      {/* QR Code Sharing Modal */}
      <ShareQRModal isOpen={isQROpen} onClose={() => setIsQROpen(false)} />
    </div>
  );
}

export default App;
