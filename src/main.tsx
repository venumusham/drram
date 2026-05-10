import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

// If the page was prerendered (scripts/prerender.mjs filled in #root),
// hydrate over it. Otherwise (dev, or a dynamic route not in the prerender
// list), do a fresh client-side render.
const isPrerendered = container.hasChildNodes();

const tree = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

if (isPrerendered) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
