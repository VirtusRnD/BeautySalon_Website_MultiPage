import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, ArrowUpRight, Sparkles } from 'lucide-react';

export const Promotion = () => {
  return (
    <section style={{ padding: '30px 0 50px 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        <div 
          style={{ 
            background: 'var(--color-secondary)', 
            color: '#ffffff',
            borderRadius: '0px',
            padding: '24px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
            boxShadow: '0 12px 32px var(--shadow-dark)',
            border: '1px solid var(--color-border)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div 
              style={{ 
                background: 'var(--color-primary)', 
                color: '#ffffff', 
                width: '48px', 
                height: '48px', 
                borderRadius: '0px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Gift size={24} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1.5px', color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                  İLK ZİYARETE ÖZEL FIRSAT
                </span>
                <Sparkles size={14} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, color: '#ffffff' }}>
                İlk Güzellik Bakımınızda <span className="cursive-text" style={{ color: 'var(--color-primary)', fontSize: '1.8rem' }}>%15 İndirim</span> Fırsatını Yakalayın!
              </h3>
            </div>
          </div>

          <Link to="/randevu" style={{ textDecoration: 'none' }}>
            <button 
              className="neu-button neu-button-lime" 
              style={{ padding: '16px 32px', fontSize: '0.95rem', whiteSpace: 'nowrap' }}
            >
              Fırsatla Randevu Al <ArrowUpRight size={18} />
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
};