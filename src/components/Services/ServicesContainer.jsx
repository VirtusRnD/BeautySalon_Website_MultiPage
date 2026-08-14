import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { editorialCategories } from '../../data/editorialServices';
import { ArrowUpRight, Bot } from 'lucide-react';

export const ServicesContainer = () => {
  const [activeTab, setActiveTab] = useState("01");
  const selectedCat = editorialCategories.find(c => c.num === activeTab) || editorialCategories[0];

  return (
    <section id="services" className="editorial-section">
      <div className="container">
        
        <div style={{ maxWidth: '780px', marginBottom: '80px' }}>
          <span className="eyebrow-text">[ GÜZELLİĞİNİZE ÖZEL DOKUNUŞLAR ]</span>
          <h2 className="font-serif-luxury" style={{ fontSize: 'calc(2.6rem + 2vw)', lineHeight: '1.08', marginBottom: '24px' }}>
            Kendiniz için ayırdığınız <br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>en güzel zaman.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-muted-text)', lineHeight: '1.7', maxWidth: '560px' }}>
            Cilt bakımından el ve tırnak uygulamalarına kadar, güzellik rutininizi tamamlayan profesyonel dokunuşları keşfedin.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', borderBottom: '1px solid var(--color-border)', paddingBottom: '20px', marginBottom: '60px' }}>
          {editorialCategories.map((cat) => (
            <button
              key={cat.num}
              onClick={() => setActiveTab(cat.num)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 0',
                fontSize: '1rem',
                fontWeight: '700',
                letterSpacing: '1px',
                color: activeTab === cat.num ? 'var(--color-text)' : 'var(--color-muted-text)',
                borderBottom: activeTab === cat.num ? '2px solid var(--color-primary)' : '2px solid transparent',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)' }}>{cat.num}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        <div style={{ marginBottom: '120px' }}>
          {selectedCat.items.map((item, idx) => (
            <div key={idx} className="service-item-row">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '32px', flex: 1 }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '700' }}>
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="service-title" style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--color-text)', marginBottom: '4px', transition: 'color 0.3s' }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-muted-text)', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="service-hover-preview">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop";
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexShrink: 0 }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-muted-text)', fontWeight: '600' }}>
                  {item.duration}
                </span>
                <ArrowUpRight className="service-arrow" size={20} style={{ transition: 'transform 0.3s' }} />
              </div>
            </div>
          ))}
        </div>

        <div className="editorial-grid-2col" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '80px', alignItems: 'center', marginBottom: '120px' }}>
          
          <div style={{ position: 'relative' }}>
            <div style={{ width: '100%', height: '560px', overflow: 'hidden' }}>
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=900" 
                alt="Hydrafacial Skin Treatment" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          <div>
            <span className="eyebrow-text">[ DERİNLERDEN GELEN IŞILTI ]</span>
            <h3 className="font-serif-luxury" style={{ fontSize: '2.8rem', lineHeight: '1.15', marginBottom: '20px' }}>
              Medikal Cilt Yenileme & Hydrafacial
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-muted-text)', lineHeight: '1.7', marginBottom: '36px' }}>
              "Vakumlu gözenek temizliği, kolajen desteği ve cildin ihtiyaç duyduğu yoğun nem bakımıyla daha canlı ve dengeli bir görünüm."
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px', borderTop: '1px solid var(--color-border)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', fontWeight: '600' }}>
                <span>Hydrafacial Medikal Bakım</span>
                <span style={{ color: 'var(--color-primary)' }}>60 dk</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', fontWeight: '600' }}>
                <span>Anti-Aging Kolajen Terapisi</span>
                <span style={{ color: 'var(--color-primary)' }}>75 dk</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', fontWeight: '600' }}>
                <span>Leke & Ton Eşitleme</span>
                <span style={{ color: 'var(--color-primary)' }}>60 dk</span>
              </div>
            </div>

            <Link to="/randevu" style={{ textDecoration: 'none' }}>
              <button className="neu-button neu-button-lime" style={{ padding: '18px 40px' }}>
                Detayları Keşfet <ArrowUpRight size={18} />
              </button>
            </Link>
          </div>

        </div>


<div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto', paddingTop: '60px', borderTop: '1px solid var(--color-border)' }}>
  <h2 className="font-serif-luxury" style={{ fontSize: 'calc(2.2rem + 1.5vw)', lineHeight: '1.15', marginBottom: '16px' }}>
    Size en uygun bakımı <br />
    <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>birlikte keşfedelim.</span>
  </h2>
  
  <p style={{ fontSize: '1.05rem', color: 'var(--color-muted-text)', marginBottom: '36px', lineHeight: '1.6' }}>
    Hangi bakımın cildinize ve ihtiyacınıza daha uygun olduğundan emin değilseniz, uzmanlarımızla iletişime geçebilir veya hemen online randevunuzu planlayabilirsiniz.
  </p>

  <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
    <Link to="/randevu" style={{ textDecoration: 'none' }}>
      <button className="neu-button neu-button-lime" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '18px 36px', fontSize: '0.95rem' }}>
        Hemen Randevu Al <ArrowUpRight size={18} />
      </button>
    </Link>

    <a href="https://wa.me/905551234567" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
      <button className="neu-button" style={{ padding: '18px 36px', fontSize: '0.95rem' }}>
        Uzmanımıza Danışın ↗
      </button>
    </a>
  </div>
</div>

      </div>
    </section>
  );
};