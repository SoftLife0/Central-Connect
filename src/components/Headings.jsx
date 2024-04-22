import React from 'react';

function Headings({ subTitle, mainTitle, description }) {
  return (
    <div className='heading'>
      <h5 className='text-muted heading-subtitle'>{subTitle}</h5>
      <h1 className='heading-title'>{mainTitle}</h1>
      <h4 className='heading-description'>{description}</h4>
    </div>
  );
}

export default Headings;
