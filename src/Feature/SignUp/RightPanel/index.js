import React from 'react';
import Image1 from '../../../assets/pic1.png';
import Image2 from '../../../assets/pic2.png';
import Image3 from '../../../assets/pic3.png';
import classes from './RightPanel.module.css';
const RightPanel = () => {
  return (
    <div className={classes.sidepanel}>
      <h1> Welcome to our community</h1>
      <br />
      <p className={classes.para}>
        Integrating innovation, community and providing our members with the
        best user experience. Sign up to get access to our key features.
      </p>
      <br />
      <div>
        <img className={classes.img1} src={Image1} alt="pic1"></img>
        <img className={classes.img2} src={Image2} alt="pic2"></img>
        <img className={classes.img3} src={Image3} alt="pic3"></img>
        <p>1k+ members have joined.</p>
      </div>
    </div>
  );
};

export default RightPanel;
