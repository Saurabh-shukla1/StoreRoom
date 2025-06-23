'use client';

import Script from 'next/script';
import { useState } from 'react';

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
