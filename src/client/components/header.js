import { PropTypes } from 'react'

export const Header = ({siteInfo}) => {
  return (
    <div className="header">
      <h1>{siteInfo.h1}</h1>
      <h4>{siteInfo.h4}</h4>
      <p>{siteInfo.intro1}</p>
      <p>{siteInfo.intro2}</p>
    </div>
  )
}

Header.propTypes = {
  siteInfo: PropTypes.object
}
