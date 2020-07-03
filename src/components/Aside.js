import React from 'react'
import{Link} from "react-router-dom";
function Aside() {
    return (
        <div className="asideConntainer">
       
    <aside className=''>
    <Link to="/Profile-Page" >
    <span className="fas fa-camera-retro"/>
</Link>
      <h1 className="logo">
      <Link to="/Profile-Page" className=''>
      Style
        </Link>
      </h1>
      <nav className="main-menu">
        <ul>
          <li className="">
          <Link to="/Profile-Page">Home</Link>
          </li>
          <li className="">
          <Link href="/Gallery">Gallery</Link>
          </li>
        </ul>
      </nav>

      <div className="footer">
        <h3>Follow Us Here!</h3>
        <div className="justify-content-center">
          <ul className="align-items-center">
            <li className="align-items-center jusitfy-content-center">
            <Link to="#"><i className="fab fa-facebook"></i></Link>
            </li>
            <li className="align-items-center jusitfy-content-center">
            <Link to="https://twitter.com/CarterFinesse"><i className="fab fa-twitter"></i></Link></li>
            <li className=""><Link to="#"><i class="icon-instagram"></i></Link>
            </li>
            <li className="align-items-center jusitfy-content-center">
            <Link to="https://www.linkedin.com/in/finesse-carter-dev/"><i className="fab fa-linkedin"></i></Link>
            </li>
            <li className="align-items-center jusitfy-content-center">
            <Link to="https://github.com/Finesse-Carter/NewStyle-">
            <i className="fab fa-github"></i>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
        </div>
    )
}

export default Aside