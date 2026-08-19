import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import { themes, THEMES } from './theme/themes';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { BookingPage } from './pages/BookingPage';

const BACKEND_URL = 'https://theme-backend-vh34.onrender.com';
const socket = io(BACKEND_URL);
const CURRENT_SITE_ID = 'salon-multipage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [themeKey, setThemeKey] = useState('ivoryEspresso');

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/themes/${CURRENT_SITE_ID}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.activeTheme && themes[data.activeTheme]) {
          setThemeKey(data.activeTheme);
        }
      })
      .catch((err) => console.error(err));

    const handleThemeChange = (data) => {
      if (data.siteId === CURRENT_SITE_ID && themes[data.activeTheme]) {
        setThemeKey(data.activeTheme);
      }
    };

    socket.on('theme_changed', handleThemeChange);

    return () => {
      socket.off('theme_changed', handleThemeChange);
    };
  }, []);

  const currentTheme = (themes && themes[themeKey]) || (THEMES && THEMES[themeKey]) || {};
  useEffect(() => {
    if (!currentTheme?.colors) return;
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