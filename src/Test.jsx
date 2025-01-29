import React, { useEffect } from 'react';

const DesignPreview = () => {
  useEffect(() => {
    // You can dynamically insert any styles if needed here
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      #node-0 {
        position: absolute;
        border: 1px solid orange;
      }
      #node-1 {
        position: absolute;
        border: 1px solid orange;
      }
    `;
    document.head.appendChild(styleTag);

    // If you want to clean up after the component is unmounted
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div id="design-container">
      <div className="design-node" id="node-0" style={{ left: '-1736px', top: '-404px', width: '1440px', height: '1700px' }}></div>
      <div className="design-node" id="node-1" style={{ left: '-541px', top: '1069px', width: '50px', height: '50px' }}></div>
    </div>
  );
};

export default DesignPreview;
