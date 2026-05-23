import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

const tree = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

// The site is statically prerendered for SEO, but several pages include
// browser-only widgets and third-party media that can drift from the captured
// HTML. Mounting fresh avoids production hydration crashes (#425/#418) while
// preserving the prerendered source HTML for crawlers and first response.
container.replaceChildren();
createRoot(container).render(tree);
