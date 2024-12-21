import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {({isDarkTheme}) => {
      const containerBackground1 = isDarkTheme
        ? 'bgDarkNotfound'
        : 'bgLightNotfound'
      const containerBackground2 = isDarkTheme
        ? 'darkContainer'
        : 'lightContainer'
      const fontColor = isDarkTheme ? 'light' : 'dark'

      return (
        <>
          <Navbar />
          <div className={containerBackground1}>
            <div className={containerBackground2}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="image3"
              />
              <h1 className={`notfound-heading ${fontColor}`}>
                Lost Your Way?
              </h1>
              <p className={`notfound-description ${fontColor}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
