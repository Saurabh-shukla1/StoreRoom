import { useEffect } from 'react';

export default function SplineViewer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.8/build/spline-viewer.js';
    document.body.appendChild(script);
  }, []);

  return (
    <spline-viewer
      class="robot-3d"
      url="https://prod.spline.design/K49wMcVSF11IbBDD/scene.splinecode"
      style={{ width: '100%', height: '500px' }}
    ></spline-viewer>
  );
}
