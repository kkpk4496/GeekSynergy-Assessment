import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://tse4.mm.bing.net/th?id=OIP.eQE9ydVqKyf5Psgs30n24gHaHZ&pid=Api&P=0&h=180"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/contact" className="nav-link">
                Company Info
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
