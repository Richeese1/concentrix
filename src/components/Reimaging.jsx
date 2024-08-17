import React from 'react';
import './ModuleStyles.css';
import dog from '../asset/images/dog.jpg'

const ModuleComponent = () => {
  console.log(process.env);
  return (
    <div className="module-container">
      <h1 className="component-title">1. Re-imaging an operating system</h1>
      <div className="description-box">
        <p className="component-description">
          It refers to the process of installing or restoring an OS to a computer or server by using a pre-configured image file. This image file contains a snapshot of the OS along with any installed software, settings, and configurations.
        </p>
      </div>
      <div className="component-images">
        <img src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg" alt="Image 1" />
        <img src={dog} alt="Image 2" />
        <img src="/Images/Reimage/3.jpg" alt="Image 3" />
        <img src="/Images/Reimage/4.jpg" alt="Image 4" />
        <img src="/Images/Reimage/5.jpg" alt="Image 5" />
      </div>
    </div>
  );
};

export default ModuleComponent;
