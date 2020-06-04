import React from 'react';
import Login from './Login'
import '../css/LayOut.css'
import { Typography } from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import{BrowserRouter as Router, Link,Switch,Route} from "react-router-dom";
import 'react-awesome-slider/dist/styles.css';
import img1 from '../image/photo-1513298666969-adb84fcb4f67.jpg'
import img2 from '../image/joshua-rawson-harris-L2kkaayv3YY-unsplash.jpg'
import img3 from '../image/mike-von-_i9Sil-9fak-unsplash.jpg'
function handleOne() {
  return(
    <a href="/login">
    </a>
  )
}

function Slider() {
  return(
    <>
    <Router>
    <AwesomeSlider >
   <div style={{backgroundImage: `url(${img1})`, position: 'relative',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}>
    <Title/>
    <>
<Typography variant="h2" onClick={handleOne}>
<>
<Link to="/login" onClick={handleOne} className='linkWhite'>Login</Link> <Link to="/SignUp" className='linkWhite'>SignUp</Link>  
</>
</Typography>
</>
    </div>
    <div style={{backgroundImage: `url(${img2})`, position: 'relative',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
<Title/>
<>
<Typography variant="h2">
<>
<Link to="/login" obclick={'/login'} className='linkWhite'>Login</Link><Link to="/SignUp"  className='linkWhite'>SignUp</Link> 
</>
</Typography>
</>

    </div>
    <div style={{backgroundImage: `url(${img3})` , position: 'relative',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
<Title/>
<>
<Typography variant="h2">
<>
<Link to="/login" className='linkWhite'>Login</Link> <Link to="/SignUp" className='linkWhite'>SignUp</Link> 
</>
</Typography>
</>

    </div>
  </AwesomeSlider>
    <Switch>
  <Route path="/login">
            <Login/>
          </Route>
  </Switch>
    </Router>
  </>
 )   
}
function Title() {
  return (
    <div>
      <Typography variant="h1" color='primary' style={{ fontFamily: 'Lobster, cursive' , fontSize:'20rem'}}>
      Style
</Typography>
    </div>
  )
}

function LayOut() {
  
  return (
    
    <div className="backGroundImg" >        
<Slider/>
   </div>
    )
}

export default LayOut


