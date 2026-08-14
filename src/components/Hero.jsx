import React from 'react';

export const Hero = () => {
  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      
      <a 
        href="#booking" 
        style={{ 
          display: 'block',
          textDecoration: 'none',
          background: 'var(--color-secondary)',
          color: '#fff',
          padding: '12px 0',
          fontSize: '0.8rem',
          fontWeight: '700',
          letterSpacing: '2px',
          textAlign: 'center',
          textTransform: 'uppercase',
          transition: 'background-color 0.3s ease'
        }}
      >
        ★ YENİ SEZON BAKIMLARI BAŞLADI ★ <span style={{ color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>%15 İLK ZİYARET İNDİRİMİ İÇİN TIKLAYIN</span> ★ KENDİNE ÖZEN GÖSTER ★
      </a>

      <div style={{ position: 'relative', width: '100%', height: '75vh', minHeight: '520px', overflow: 'hidden' }}>
        <img 
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1600" 
          alt="Aura Beauty Hero" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(43, 19, 32, 0.3) 0%, rgba(43, 19, 32, 0.82) 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
          color: '#ffffff'
        }}>
          <span style={{ 
            fontSize: '0.8rem', 
            fontWeight: '800', 
            letterSpacing: '3px', 
            textTransform: 'uppercase', 
            marginBottom: '16px',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(8px)',
            padding: '8px 20px',
            borderRadius: '0px'
          }}>
            [ GÜZELLİK • BAKIM • ÖZEN ]
          </span>

          <h1 className="serif-title" style={{ fontSize: 'calc(2.5rem + 3vw)', lineHeight: '1.05', marginBottom: '20px', textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
            GÜZELLİĞİNİN <br />
            <span className="cursive-text" style={{ color: 'var(--color-primary)', fontSize: '1.2em' }}>hikayesini</span> YAZ
          </h1>

          <p style={{ maxWidth: '560px', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '32px', color: '#f0e4f2', opacity: 0.95 }}>
            Doğal içerikli premium bakım ritüelleri ve kişiselleştirilmiş dokunuşlarla kendinizi yeniden keşfedin.
          </p>

          <a href="#booking" style={{ textDecoration: 'none' }}>
            <button className="neu-button neu-button-lime" style={{ padding: '18px 42px', fontSize: '1.05rem' }}>
              Randevunu Oluştur 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </button>
          </a>
        </div>
      </div>

      <div style={{ background: 'var(--color-background)', borderBottom: '1px solid var(--color-border)', padding: '36px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
          
          <div className="neu-pressed" style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="neu-button" style={{ width: '52px', height: '52px', padding: 0, flexShrink: 0, color: 'var(--color-primary)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-text)', letterSpacing: '0.5px', marginBottom: '2px' }}>%100 BİTKİSEL</strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-muted-text)' }}>Temiz İçerikli Ürünler</span>
            </div>
          </div>

          <div className="neu-pressed" style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="neu-button" style={{ width: '52px', height: '52px', padding: 0, flexShrink: 0, color: 'var(--color-primary)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-text)', letterSpacing: '0.5px', marginBottom: '2px' }}>STERİL & HİJYENİK</strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-muted-text)' }}>Kişiye Özel Ekipman</span>
            </div>
          </div>

          <div className="neu-pressed" style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="neu-button" style={{ width: '52px', height: '52px', padding: 0, flexShrink: 0, color: 'var(--color-primary)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-text)', letterSpacing: '0.5px', marginBottom: '2px' }}>UZMAN KADRO</strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-muted-text)' }}>Sertifikalı Estetisyenler</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};