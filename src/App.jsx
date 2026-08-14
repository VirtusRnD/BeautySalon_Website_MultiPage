import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { getActiveTheme } from './theme/themes';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { BookingPage } from './pages/BookingPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const currentTheme = getActiveTheme();

  useEffect(() => {
    const root = document.documentElement;
    const { colors } = currentTheme;

    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-hover', colors.primaryHover);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-text', colors.text);
    root.style.setProperty('--color-muted-text', colors.mutedText);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--shadow-light', colors.shadowLight);
    root.style.setProperty('--shadow-dark', colors.shadowDark);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-input-bg', colors.inputBg);
  }, [currentTheme]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-background)' }}>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
          <Route path="/deneyim" element={<ExperiencePage />} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/randevu" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}