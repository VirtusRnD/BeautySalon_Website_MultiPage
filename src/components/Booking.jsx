import React, { useState } from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { editorialCategories } from '../data/editorialServices';

export const Booking = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    category: '',
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const currentCategoryData = editorialCategories.find(
    (c) => c.title === selectedCategory
  );

  const handleCategoryChange = (e) => {
    const catTitle = e.target.value;
    setSelectedCategory(catTitle);
    setFormData((prev) => ({
      ...prev,
      category: catTitle,
      service: '' 
    }));
  };

  const validate = () => {
    let errs = {};
    if (!formData.category) errs.category = 'Lütfen bir kategori seçiniz.';
    if (!formData.service) errs.service = 'Lütfen bir işlem/hizmet seçiniz.';
    if (!formData.date) errs.date = 'Tarih seçimi zorunludur.';
    if (!formData.time) errs.time = 'Saat seçimi zorunludur.';
    if (!formData.name.trim()) errs.name = 'Ad Soyad alanı boş bırakılamaz.';
    if (!formData.phone.trim()) errs.phone = 'Telefon numarası gereklidir.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <section id="booking" className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        
        <div style={{ textAlign: 'center', margin: '0 auto 50px' }}>
          <span className="eyebrow-text">[ KİŞİSEL RANDEVU ]</span>
          <h2 className="font-serif-luxury" style={{ fontSize: '3rem', color: 'var(--color-text)', lineHeight: '1.15', marginBottom: '16px' }}>
            Randevunuzu Oluşturun
          </h2>
          <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem' }}>
            Birkaç basit adımda online randevunuzu kolayca planlayın.
          </p>
        </div>

        <div 
          style={{ 
            padding: '48px 40px', 
            background: 'var(--color-background)', 
            boxShadow: '0 20px 40px var(--shadow-dark)',
            borderRadius: '0px',
            border: '1px solid var(--color-border)'
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: '70px', height: '70px', background: 'var(--color-primary)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-serif-luxury" style={{ fontSize: '2.4rem', color: 'var(--color-text)', marginBottom: '12px' }}>
                Randevunuz Alındı!
              </h3>
              <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto 32px', lineHeight: '1.6' }}>
                Talebiniz başarıyla bize ulaştı. <strong>{formData.service}</strong> bakımınız için kısa süre içinde onay için sizinle iletişime geçeceğiz.
              </p>
              <button 
                className="neu-button neu-button-lime" 
                onClick={() => {
                  setSubmitted(false);
                  setSelectedCategory('');
                  setFormData({ category: '', service: '', date: '', time: '', name: '', phone: '', email: '' });
                }} 
                style={{ padding: '16px 36px' }}
              >
                Yeni Randevu Oluştur
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-text)' }}>
                  1. Kategori Seçiniz *
                </label>
                <select 
                  className="neu-input" 
                  style={{ width: '100%', padding: '16px', borderRadius: '0px', fontSize: '0.95rem' }}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Kategori Seçin...</option>
                  {editorialCategories.map((cat) => (
                    <option key={cat.num} value={cat.title}>
                      {cat.num} - {cat.title}
                    </option>
                  ))}
                </select>
                {errors.category && <span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: '700', marginTop: '4px', display: 'block' }}>{errors.category}</span>}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-text)' }}>
                  2. İşlem Seçiniz *
                </label>
                <select 
                  className="neu-input" 
                  style={{ width: '100%', padding: '16px', borderRadius: '0px', fontSize: '0.95rem' }}
                  value={formData.service}
                  disabled={!selectedCategory}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">
                    {selectedCategory ? 'Uygulanacak İşlemi Seçin...' : 'Önce Kategori Seçiniz'}
                  </option>
                  {currentCategoryData?.items.map((item, idx) => (
                    <option key={idx} value={item.name}>
                      {item.name} ({item.duration})
                    </option>
                  ))}
                </select>
                {errors.service && <span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: '700', marginTop: '4px', display: 'block' }}>{errors.service}</span>}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-text)' }}>
                  Tarih *
                </label>
                <input 
                  type="date" 
                  className="neu-input" 
                  style={{ width: '100%', padding: '16px', borderRadius: '0px', fontSize: '0.95rem' }}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
                {errors.date && <span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: '700', marginTop: '4px', display: 'block' }}>{errors.date}</span>}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-text)' }}>
                  Saat *
                </label>
                <input 
                  type="time" 
                  className="neu-input" 
                  style={{ width: '100%', padding: '16px', borderRadius: '0px', fontSize: '0.95rem' }}
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
                {errors.time && <span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: '700', marginTop: '4px', display: 'block' }}>{errors.time}</span>}
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-text)' }}>
                  Ad Soyad *
                </label>
                <input 
                  type="text" 
                  placeholder="Örn: Ayşe Yılmaz" 
                  className="neu-input" 
                  style={{ width: '100%', padding: '16px', borderRadius: '0px', fontSize: '0.95rem' }}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: '700', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-text)' }}>
                  Telefon *
                </label>
                <input 
                  type="tel" 
                  placeholder="+90 5XX XXX XX XX" 
                  className="neu-input" 
                  style={{ width: '100%', padding: '16px', borderRadius: '0px', fontSize: '0.95rem' }}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                {errors.phone && <span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: '700', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-text)' }}>
                  E-Posta
                </label>
                <input 
                  type="email" 
                  placeholder="ornek@gmail.com" 
                  className="neu-input" 
                  style={{ width: '100%', padding: '16px', borderRadius: '0px', fontSize: '0.95rem' }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div style={{ gridColumn: 'span 2', marginTop: '16px' }}>
                <button 
                  type="submit" 
                  className="neu-button neu-button-lime" 
                  style={{ width: '100%', padding: '18px', fontSize: '1rem', borderRadius: '0px' }}
                >
                  Randevuyu Onayla <ArrowUpRight size={20} />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>

      <style>{`
        @media (max-width: 650px) {
          #booking form { grid-template-columns: 1fr !important; }
          #booking form div { grid-column: span 1 !important; }
          #booking > div > div { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  );
};