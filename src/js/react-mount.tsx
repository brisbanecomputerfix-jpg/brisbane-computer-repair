import React from 'react';
import { createRoot } from 'react-dom/client';
import { Footerdemo } from '@/components/ui/footer-section';
import { Component as LiquidGlassComponent } from '@/components/ui/liquid-glass';

// Mount Footer
const footerRootElement = document.getElementById('react-footer-root');
if (footerRootElement) {
  const root = createRoot(footerRootElement);
  root.render(
    <React.StrictMode>
      <Footerdemo />
    </React.StrictMode>
  );
}

// Mount Liquid Glass
const liquidGlassRootElement = document.getElementById('react-liquid-glass-root');
if (liquidGlassRootElement) {
  const root = createRoot(liquidGlassRootElement);
  root.render(
    <React.StrictMode>
      <LiquidGlassComponent />
    </React.StrictMode>
  );
}
