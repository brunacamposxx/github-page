import React from 'react';
import Profile from '../../assets/Profile.pdf';

function CTA() {
  return (
    <div className="cta">
      <a href={Profile} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
    </div>
  );
}

export default CTA;
