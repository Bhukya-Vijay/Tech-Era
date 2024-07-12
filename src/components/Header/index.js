import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <Link to="/" className="nav-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
      alt="website logo"
      className="website-logo"
    />
  </Link>
)

export default Header
