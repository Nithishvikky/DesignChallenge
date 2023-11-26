import React from 'react';
import FrontDiv from './HomePage/FrontDiv';
import Features from './HomePage/Features';
import TechStack from './HomePage/TechStack';
import '../index.css';

export default function HomePage() {
  return (
    <div class="body py-12">
      <FrontDiv/>
      <Features/>
      <TechStack/>
    </div>
    
  )
}
