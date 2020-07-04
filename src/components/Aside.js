import React from 'react'
import{Link} from "react-router-dom";
import SocialMedia from './SocialMedia'


function Aside() {
    return (
        <div className="asideConntainer" style={asideConntainer}>
       
    <aside className='aside' style={aside}>
    <Link to="/Profile-Page" >
    <span className="fas fa-camera-retro" style={{fontSize: '100px'}}/>
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
          <SocialMedia/>
        </div>
      </div>
    </aside>
        </div>
    )
}
const asideConntainer={
  justifyContent: 'flex-start',
  width: '20%',
  height: '100%',
  backgroundColor: "#abaab9",
}
const aside={
  border: '3px blue solid',
  justifyContent:'center',
  height: '657px',
  paddingTop: '3em',
    paddingBottom: '40px',
    paddingLeft: '3em',
    paddingRight: '3em',
    position: 'fixed',
    backgroundColor: "#abaab9",
    overflowY: 'hidden',
    zIndex: '1001',
}
export default Aside