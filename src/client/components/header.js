import { PropTypes } from 'react'
import FaTwitter from 'react-icons/lib/fa/twitter'

export const Header = ({siteInfo}) => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__holder">
          <h1>{siteInfo.h1} <FaTwitter /></h1>
          <h4>{siteInfo.h4}</h4>
          <p>{siteInfo.intro1}</p>
          <p>{siteInfo.intro2}</p>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteInfo: PropTypes.object
}
