import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {({isDarkTheme}) => {
      const homeIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const containerBackground = isDarkTheme ? 'dark-bg' : 'light-bg'
      const fontColor = isDarkTheme ? 'headingDark' : 'headingLight'

      return (
        <div className={containerBackground}>
          <Navbar />
          <div className="subContainer">
            <img src={homeIcon} alt="home" className="image" />
            <h1 className={fontColor}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
