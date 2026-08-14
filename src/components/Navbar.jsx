import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Deneyim', path: '/deneyim' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'var(--color-surface)',
      padding: scrolled ? '12px 0' : '20px 0',
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 10px 20px var(--shadow-dark)' : 'none',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'var(--color-text)', fontWeight: '800', fontSize: '1.3rem', letterSpacing: '1px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
          </svg>
          <span>AURA BEAUTY</span>
        </Link>

        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              style={{ 
                textDecoration: 'none', 
                color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text)', 
                fontSize: '0.9rem', 
                fontWeight: '700',
                letterSpacing: '0.5px',
                transition: 'color 0.2s ease'
              }}
            >
              {link.name}
            </Link>
          ))}

          <Link to="/randevu" style={{ textDecoration: 'none' }}>
            <button className="neu-button neu-button-lime" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
              Randevu Al
            </button>
          </Link>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="mobile-toggle"
          style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer', display: 'none' }}
        >
          {isOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div style={{ padding: '20px 24px', backgroundColor: 'var(--color-surface)', display: 'flex', flexDirection: 'column', gap: '18px', borderTop: '1px solid var(--color-border)' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              style={{ textDecoration: 'none', color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text)', fontWeight: '700', fontSize: '1rem' }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/randevu" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', marginTop: '8px' }}>
            <button className="neu-button neu-button-lime" style={{ width: '100%', padding: '14px 20px', fontSize: '0.95rem' }}>
              Randevu Al
            </button>
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};