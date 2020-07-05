import React from 'react'
import{Link} from "react-router-dom";
import SocialMedia from './SocialMedia'


function Aside() {
    return (
        <div className="asideConntainer" style={asideConntainer}>
       
    <aside className='aside' style={aside}>
    <Link to="/Profile-Page" >
    <span className="fas fa-camera-retro" style={{fontSize: '100px'}}/>

      <h1 className="logo">
     
      Style
      </h1>
        </Link>
      <nav className="main-menu">
        <div className='ul' style={ul}>
        <ul>
          <li className="Home" style={li}>
          <Link to="/Profile-Page">Home</Link>
          </li>
          <li className="Gallery" style={li}>
          <Link to="/Gallery">Gallery</Link>
          </li>
        </ul>
        </div>
      </nav>

      <div className="footer">
        <div className="justify-content-center">
        
          <SocialMedia/>
        </div>
      </div>
    </aside>
        </div>
    )
}
const ul={
  paddingTop: '63%',
}
const li={
  margin: '0 0 15px 0',
  padding: '0',
  listStyle: 'none',
  fontSize: '16px',
  fontWeight: '700',

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