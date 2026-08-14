import React from 'react';
import { FeaturedService } from '../components/FeaturedService';
import { Promotion } from '../components/Promotion';

export const ExperiencePage = () => {
  return (
    <div style={{ paddingTop: '40px' }}>
      <FeaturedService />
      <Promotion />
    </div>
  );
};