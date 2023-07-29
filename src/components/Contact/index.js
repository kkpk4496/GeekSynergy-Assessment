import './index.css'
import {Link} from 'react-router-dom'

const Contact = () => (
  <div className="co">
    <Link to="/">
      <img
        className="website-logo"
        src="https://tse4.mm.bing.net/th?id=OIP.eQE9ydVqKyf5Psgs30n24gHaHZ&pid=Api&P=0&h=180"
        alt="website logo"
      />
      <Link to="/" className="nav-link links">
        Home
      </Link>
    </Link>

    <div className="contact">
      <h1>
        Company:
        <span className="titles"> Geeksynergy Technologies Pvt Ltd</span>
      </h1>
      <h1>
        Address:
        <span className="titles"> Sanjayanagar, Bengaluru-56 </span>
      </h1>
      <h1>
        Phone:
        <span className="titles"> XXXXXXXXX09 </span>
      </h1>
      <h1>
        Email:
        <span className="titles"> XXXXXX@gmail.com</span>
      </h1>
    </div>
  </div>
)

export default Contact
