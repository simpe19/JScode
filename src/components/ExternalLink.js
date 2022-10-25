import React from 'react'

const ExternalLink = ({link, icon}) => {
  return (
    <a href={link} target='_blank'>
        <i className={icon}></i>
        </a>
  )
}

export default ExternalLink