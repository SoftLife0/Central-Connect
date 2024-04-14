import React from 'react'

function Headings ({ subTitle, mainTitle, description }) {
  return (
    <div className='heading'>
        <h5 className='text-muted'>{subTitle}</h5>
        <h1>{mainTitle}</h1>
        <h4>{description}</h4>
    </div>
  )
}

export default Headings;