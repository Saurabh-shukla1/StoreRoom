'use client';

import Script from 'next/script';
import { useState } from 'react';

/**
 * Renders a 3D Spline scene viewer, loading the required external script asynchronously.
 * 
 * Displays the Spline viewer only after the external script has finished loading to ensure proper initialization of the custom element.
 */
export default function SplineViewer() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Load the spline viewer script using next/script */}
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.10.8/build/spline-viewer.js"
        onLoad={() => setLoaded(true)}
        strategy="afterInteractive"
      />

      {/* Wait for the script to load before rendering the viewer */}
      {loaded && (
        <spline-viewer
          url="https://prod.spline.design/K49wMcVSF11IbBDD/scene.splinecode"
          style={{ width: '100%', height: '500px', display: 'block' }}
        />
      )}
    </>
  );
}
