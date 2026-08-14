import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-secondary)', color: '#ffffff', paddingTop: '80px', paddingBottom: '40px', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', fontSize: '1.4rem', letterSpacing: '1px', marginBottom: '16px' }}>
              <Sparkles size={20} style={{ color: 'var(--color-primary)' }} />
              <span>AURA BEAUTY</span>
            </div>
            <p style={{ color: '#a398a0', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Doğal güzelliğinizi ön plana çıkaran, luxury & editoryal dokunuşlara sahip özel bakım salonu.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px', color: 'var(--color-primary)' }}>
              Navigasyon
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/" style={{ color: '#e0d8de', textDecoration: 'none', fontSize: '0.9rem' }}>Ana Sayfa</Link>
              <Link to="/hakkimizda" style={{ color: '#e0d8de', textDecoration: 'none', fontSize: '0.9rem' }}>Hakkımızda</Link>
              <Link to="/hizmetler" style={{ color: '#e0d8de', textDecoration: 'none', fontSize: '0.9rem' }}>Hizmetlerimiz</Link>
              <Link to="/deneyim" style={{ color: '#e0d8de', textDecoration: 'none', fontSize: '0.9rem' }}>Deneyim</Link>
              <Link to="/galeri" style={{ color: '#e0d8de', textDecoration: 'none', fontSize: '0.9rem' }}>Galeri</Link>
              <Link to="/iletisim" style={{ color: '#e0d8de', textDecoration: 'none', fontSize: '0.9rem' }}>İletişim & Randevu</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px', color: 'var(--color-primary)' }}>
              İletişim
            </h4>
            <p style={{ color: '#e0d8de', fontSize: '0.9rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} style={{ color: 'var(--color-primary)' }} /> Kadıköy / İstanbul
            </p>
            <p style={{ color: '#e0d8de', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} style={{ color: 'var(--color-primary)' }} /> +90 555 123 45 67
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px', color: 'var(--color-primary)' }}>
              Takip Edin
            </h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px', textAlign: 'center', color: '#82757f', fontSize: '0.85rem' }}>
          © 2026 Aura Beauty Salon. Tüm hakları saklıdır.
        </div>

      </div>
    </footer>
  );
};