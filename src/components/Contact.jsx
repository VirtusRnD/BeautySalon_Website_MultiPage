import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
          <span className="eyebrow-text">[ İLETİŞİM & LOKASYON ]</span>
          <h2 className="font-serif-luxury" style={{ fontSize: '3rem', color: 'var(--color-text)', lineHeight: '1.15', marginBottom: '16px' }}>
            Bizimle İletişime Geçin
          </h2>
          <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Sorularınız, özel randevu talepleriniz veya konforlu salon ziyaretiniz için buradayız.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '50px', alignItems: 'stretch' }}>
          
          <div 
            style={{ 
              padding: '40px 32px', 
              background: 'var(--color-surface)', 
              boxShadow: '0 12px 32px var(--shadow-dark)',
              borderRadius: '0px',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ width: '44px', height: '44px', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--color-text)', fontSize: '1rem', marginBottom: '4px' }}>Salon Adresimiz</strong>
                  <p style={{ color: 'var(--color-muted-text)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    Atatürk Mahallesi, Güzellik Sokak No:12, Kadıköy / İstanbul
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ width: '44px', height: '44px', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--color-text)', fontSize: '1rem', marginBottom: '4px' }}>Telefon & İletişim</strong>
                  <p style={{ color: 'var(--color-muted-text)', fontSize: '0.95rem' }}>+90 555 123 45 67</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ width: '44px', height: '44px', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--color-text)', fontSize: '1rem', marginBottom: '4px' }}>E-Posta</strong>
                  <p style={{ color: 'var(--color-muted-text)', fontSize: '0.95rem' }}>info@aurabeauty.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ width: '44px', height: '44px', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--color-text)', fontSize: '1rem', marginBottom: '4px' }}>Çalışma Saatlerimiz</strong>
                  <p style={{ color: 'var(--color-muted-text)', fontSize: '0.95rem' }}>Pazartesi - Cumartesi: 09:00 - 20:00</p>
                  <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: '700', marginTop: '2px' }}>Pazar: Kapalı</p>
                </div>
              </div>

            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '36px', flexWrap: 'wrap' }}>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
                <button className="neu-button" style={{ width: '100%', padding: '14px', fontSize: '0.88rem' }}>
                  Yol Tarifi Al <ArrowUpRight size={16} />
                </button>
              </a>

              <a href="https://wa.me/905551234567" target="_blank" rel="noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
                <button className="neu-button neu-button-lime" style={{ width: '100%', padding: '14px', fontSize: '0.88rem' }}>
                  WhatsApp'tan Ulaş <MessageCircle size={16} />
                </button>
              </a>
            </div>

          </div>

          <div style={{ position: 'relative', minHeight: '400px', width: '100%', boxShadow: '0 12px 32px var(--shadow-dark)' }}>
            <iframe
              title="Aura Beauty Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12041.74836056372!2d29.0253818!3d40.9904269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab86a4e321b03%3A0x2f1559f2393226a2!2sKad%C4%B1k%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '400px', filter: 'grayscale(0.2) contrast(1.05)' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 850px) {
          #contact .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};