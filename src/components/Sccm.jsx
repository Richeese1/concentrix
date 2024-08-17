import React from 'react';

const SCCM = () => {
  return (
    <div className="module-container">
      <h1 className="component-title">14. SCCM (System Center Configuration Manager)</h1>
      <div className="description-box">
        <p className="component-description">
        Manage, deploy, and protect applications and devices in an organization. 
        Administrators typically use SCCM for endpoint protection, patching, and distributing software in bulk, among other possible use cases. 
        </p>
      </div>
      <div className="component-images">
        <img src="/Images/SCCM/1.jpg" alt="Image 1" />
        <img src="/Images/SCCM/2.jpg" alt="Image 2" />
        <img src="/Images/SCCM/3.jpg" alt="Image 3" />
        <img src="/Images/SCCM/4.jpg" alt="Image 4" />
        <img src="/Images/SCCM/5.jpg" alt="Image 5" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default SCCM;
