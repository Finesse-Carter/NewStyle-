import React from 'react';
// import Login from './components/Login'
import '../css/LayOut.css'
import { Button,Typography } from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import{BrowserRouter as Router, Link} from "react-router-dom";
import 'react-awesome-slider/dist/styles.css';
import img1 from '../image/photo-1513298666969-adb84fcb4f67.jpg'
import img2 from '../image/joshua-rawson-harris-L2kkaayv3YY-unsplash.jpg'
import img3 from '../image/mike-von-_i9Sil-9fak-unsplash.jpg'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
 h1: {
    ...theme.typography.h1,
    fontFamily: 'Lobster, cursive',
    padding: theme.spacing(1),
  },
}));





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
<Typography variant="h2">
<>
<Link to="/Login">Login</Link> <Link to="/SignUp">SignUp</Link>  
</>
</Typography>
</>

{/* <MainButtons/> */}
    </div>
    <div style={{backgroundImage: `url(${img2})`, position: 'relative',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
<Title/>
<>
<Typography variant="h2">
<>
<Link to="/Login">Login</Link><Link to="/SignUp">SignUp</Link> 
</>
</Typography>
</>
{/* <MainButtons/> */}
    </div>
    <div style={{backgroundImage: `url(${img3})` , position: 'relative',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
<Title/>
<>
<Typography variant="h2">
<>
<Link to="/Login">Login</Link> <Link to="/SignUp">SignUp</Link> 
</>
</Typography>
</>
{/* <MainButtons/> */}
    </div>
  </AwesomeSlider>
    </Router>
  </>
 )   
}
function Title() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h1" className={classes.h1} style={{ fontFamily: 'Lobster, cursive' , fontSize:'20rem'}}>
      Style
</Typography>
    </div>
  )
}

function MainButtons(){
 return(
<div className='mainButtons'>

<>
<Link to="/Login"></Link>

<Button variant="contained" color="primary">Login</Button> <Button variant="contained" color="primary">SignUp</Button>
</>
</div>
  )
} 




function LayOut() {
  
  return (
    
    <div className="backGroundImg" >
    
        
<Slider>
      

 >

 

</Slider>
     
         </div>
    )
}

export default LayOut


