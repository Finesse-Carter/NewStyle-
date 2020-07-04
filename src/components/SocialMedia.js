import React from 'react'
import{Link} from "react-router-dom";

function SocialMedia() {
    return(
      <div >
        <ul >
          <div className='row' >
<div className='li' style={flex}>

          <li className="align-items-center jusitfy-content-center" >
              <Link to="#"><i className="fab fa-facebook"></i></Link>
              </li>
              <li className="align-items-center jusitfy-content-center" >
              <Link to="https://twitter.com/CarterFinesse"><i className="fab fa-twitter"></i></Link></li>
              <li className=""><Link to="#"><i class="icon-instagram" ></i></Link>
              </li>
              <li className="align-items-center jusitfy-content-center" >
              <Link to="https://www.linkedin.com/in/finesse-carter-dev/"><i className="fab fa-linkedin"></i></Link>
              </li>
              <li className="align-items-center jusitfy-content-center" >
              <Link to="https://github.com/Finesse-Carter/NewStyle-">
              <i className="fab fa-github"></i>
              </Link>
              </li>
        
</div>
          </div>
        </ul>
      </div>
    )
  }
  const flex={
    display:'flex',
    justifyContent: 'center',
    fontSize: '2rem',
}

  export default SocialMedia