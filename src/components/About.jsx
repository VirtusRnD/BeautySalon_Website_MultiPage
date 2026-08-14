import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--color-background)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '60px', alignItems: 'center' }}>
          
          <div style={{ position: 'relative' }}>
            <div style={{ width: '100%', height: '480px', overflow: 'hidden', boxShadow: '0 16px 36px var(--shadow-dark)' }}>
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=900" 
                alt="Aura Salon Atmosferi" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div style={{
              position: 'absolute',
              top: '-16px',
              left: '-16px',
              background: 'var(--color-secondary)',
              color: '#ffffff',
              padding: '12px 20px',
              borderRadius: '0px',
              fontSize: '0.8rem',
              fontWeight: '800',
              letterSpacing: '1px'
            }}>
              ✨ SANAT & KONFOR
            </div>
          </div>

          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '2px', color: 'var(--color-primary)', display: 'block', marginBottom: '12px' }}>
              [ BİZİM HİKAYEMİZ ]
            </span>

            <h2 className="serif-title" style={{ fontSize: '2.8rem', color: 'var(--color-text)', lineHeight: '1.2', marginBottom: '20px' }}>
              REWRITING BEAUTY <br />
              <span className="cursive-text" style={{ fontSize: '3.4rem', color: 'var(--color-primary)' }}>zarafet dolu</span> DOKUNUŞLARLA
            </h2>

            <p style={{ color: 'var(--color-muted-text)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '24px' }}>
              Gürültüden uzak, her detayı konforunuz için tasarlanmış lüks ve ferah ortamımızla size sadece bir güzellik bakımı değil, ruhunuzu dinlendireceğiniz özel bir sığınak sunuyoruz.
            </p>

            <p style={{ color: 'var(--color-muted-text)', lineHeight: '1.7', fontSize: '0.98rem', marginBottom: '32px' }}>
              Sertifikalı estetisyenlerimiz ve dermatolojik onaylı ürünlerimizle güzelliğinizi riske atmadan, doğal ışığınızı ortaya çıkarıyoruz.
            </p>

            <Link to="/hizmetler" style={{ textDecoration: 'none' }}>
              <button className="neu-button neu-button-lime" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                Salonumuzu Keşfedin <ArrowUpRight size={18} />
              </button>
            </Link>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};