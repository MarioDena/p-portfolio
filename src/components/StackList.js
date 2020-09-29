import React from 'react';
import resume from '../assets/Resume.pdf';

const StackList = () => {
  return (
    <div className="container">
      <div className="row">
        <h3 className="infoTitile3">Languages</h3>
      </div>
      <div className="row">
        <p className="infoInfo inframe">E6S-E5S / Javascript / HTML / CSS</p>
      </div>
      <div className="row">
        <h3 className="infoTitile3">Frameworks</h3>
      </div>
      <div className="row">
        <p className="infoInfo inframe">React / Ruby on Rails / Phaser / Rspec</p>
      </div>
      <div className="row">
        <h3 className="infoTitile3">Tools</h3>
      </div>
      <div className="row">
        <p className="infoInfo inframe">
          Webpack / Redux / SCSS / Git / Bootstrap
        </p>
      </div>
    </div>
  );
};

export default StackList;
