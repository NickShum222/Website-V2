// Development utility to debug sizing differences
export const debugSizing = () => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log('=== Sizing Debug Info ===');
    console.log('Viewport width:', window.innerWidth);
    console.log('Viewport height:', window.innerHeight);
    console.log('Device pixel ratio:', window.devicePixelRatio);
    console.log('Browser zoom level:', Math.round(window.devicePixelRatio * 100) + '%');
    
    // Check if fonts are loaded
    if (document.fonts) {
      console.log('Fonts ready:', document.fonts.ready);
      document.fonts.ready.then(() => {
        console.log('All fonts loaded');
      });
    }
    
    // Check computed styles on a sample element
    const sampleElement = document.querySelector('h1, .text-headingLgClamp, [class*="text-"]');
    if (sampleElement) {
      const styles = window.getComputedStyle(sampleElement);
      console.log('Sample element font-size:', styles.fontSize);
      console.log('Sample element font-family:', styles.fontFamily);
      console.log('Sample element line-height:', styles.lineHeight);
    }
  }
};

// Add to window for easy console access
if (typeof window !== 'undefined') {
  window.debugSizing = debugSizing;
}