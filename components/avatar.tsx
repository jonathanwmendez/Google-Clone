import React from 'react'

type Props = {
    url: string;
    className: string;
}

function avatar({url, className}: Props) {
  return ( 
    <img 
        className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        loading='lazy'
        src={url}
        alt='avatar picture'
    />
  )
}

export default avatar