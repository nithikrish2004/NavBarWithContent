import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {({isDarkTheme, toggleTheme}) => {
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const toggleThemeIconUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const navItemColor = isDarkTheme ? 'headingDark' : 'headingLight'
      const navbarColor = isDarkTheme ? 'BgDark' : 'BgLight'

      return (
        <nav className={navbarColor}>
          <div className="container">
            <div>
              <Link to="/">
                <img src={logoUrl} alt="website logo" className="image1" />
              </Link>
            </div>
            <div>
              <ul className="nav-items">
                <Link to="/" className={navItemColor}>
                  <li className="nav-items">Home</li>
                </Link>

                <Link to="/about" className={navItemColor}>
                  <li className="nav-items">About </li>
                </Link>
              </ul>
            </div>
            <div>
              <button
                type="button"
                onClick={toggleTheme}
                className="button"
                data-testid="theme"
              >
                <img src={toggleThemeIconUrl} alt="theme" className="image2" />
              </button>
            </div>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
