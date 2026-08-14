import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

export const FeaturedService = () => {
  const steps = [
    {
      num: "01",
      title: "Kişiselleştirilmiş Analiz",
      desc: "Uzmanlarımız tarafından cildinizin ve saçınızın ihtiyaçları detaylı analiz edilir, size en uygun bakım haritası çıkarılır."
    },
    {
      num: "02",
      title: "Bitkisel & Medikal Ritüel",
      desc: "%100 dermatolojik onaylı, bitkisel ve medikal içerikli ürünlerle konforlu bir atmosferde bakımınız uygulanır."
    },
    {
      num: "03",
      title: "Işıltılı & Kalıcı Sonuç",
      desc: "Salonumuzdan yenilenmiş ve enerjiniz yükselmiş olarak ayrılır, uzun süre devam eden ışıltının keyfini çıkarırsınız."
    }
  ];

  return (
    <section id="experience" className="section-padding" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-input-bg)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
          <span style={{ 
            fontSize: '0.8rem', 
            fontWeight: '800', 
            letterSpacing: '2.5px', 
            color: 'var(--color-primary)', 
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '12px'
          }}>
            [ AURA DOKUNUŞU ]
          </span>

          <h2 className="serif-title" style={{ fontSize: '2.8rem', color: 'var(--color-text)', lineHeight: '1.25', marginBottom: '16px' }}>
            KENDİNİZİ ŞIMARTMANIN <br />
            <span className="cursive-text" style={{ fontSize: '3.6rem', color: 'var(--color-primary)' }}>en özel 3 adımı</span>
          </h2>

          <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Aura Beauty kapısından içeri girdiğiniz andan itibaren size özel tasarlanmış adımlarla benzersiz bir bakıma hazır olun.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="neu-pressed"
              style={{
                padding: '40px 32px',
                borderRadius: '0px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backdropFilter: 'blur(8px)'
              }}
            >
              <div>
                <div style={{
                  fontSize: '3.2rem',
                  fontWeight: '900',
                  fontFamily: 'Playfair Display, serif',
                  color: 'var(--color-primary)',
                  opacity: 0.35,
                  lineHeight: '1',
                  marginBottom: '16px'
                }}>
                  {step.num}
                </div>

                <h3 className="serif-title" style={{ fontSize: '1.45rem', color: 'var(--color-text)', marginBottom: '12px' }}>
                  {step.title}
                </h3>

                <p style={{ color: 'var(--color-muted-text)', fontSize: '0.98rem', lineHeight: '1.65', marginBottom: '24px' }}>
                  {step.desc}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text)', fontSize: '0.85rem', fontWeight: '800' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-primary)' }} />
                <span>Kişiye Özel Yaklaşım</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/randevu" style={{ textDecoration: 'none' }}>
            <button className="neu-button neu-button-lime" style={{ padding: '18px 42px', fontSize: '1.05rem' }}>
              Bu Deneyimi Yaşayın <ArrowUpRight size={20} />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};