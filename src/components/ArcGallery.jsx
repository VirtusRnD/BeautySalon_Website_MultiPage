import React from 'react';
import { galleryImages } from '../data/gallery';

export const ArcGallery = () => {
  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--color-background)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span className="eyebrow-text">[ SANAT & ESTETİK ]</span>
        <h2 className="font-serif-luxury" style={{ fontSize: '3rem', color: 'var(--color-text)' }}>
          Aura Atmosferini Keşfedin
        </h2>
      </div>

      <div className="slider-container">
        <div className="slider-track">
          {[...galleryImages, ...galleryImages].map((img, idx) => (
            <div 
              key={idx} 
              style={{ 
                width: '320px', 
                height: '420px', 
                flexShrink: 0, 
                overflow: 'hidden',
                boxShadow: '0 12px 28px var(--shadow-dark)',
                border: '1px solid var(--color-border)'
              }}
            >
              <img 
                src={img.url} 
                alt={img.title || 'Aura Gallery'} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};