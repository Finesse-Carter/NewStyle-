import React from 'react'
import modle from '../image/mike-von-_i9Sil-9fak-unsplash.jpg'
import '../css/LayOut.css'
import { Button,Typography } from '@material-ui/core';

function Title() {
  return (
    <div>
      <Typography variant="h1">
      Style
</Typography>
    </div>
  )
}
function LeftSidebar() {
  return(
    <section className='leftSidebar' >
<h2>
  welcome To Style, A Style For All
</h2>
    </section>
  )
}
function MainButtons(){
 return(
<div className='mainButtons'>
<h3>Login or Signup:</h3>
<>
<Button variant="contained" color="primary">Login</Button> <Button variant="contained" color="primary">Signup</Button>
</>
</div>
  )
} 

function LayOut() {
  
  return (
       <div className="backGroundImg" style={{backgroundImage: `url(${modle})` }}>
        <>
 <Title/><LeftSidebar/>
</>
<MainButtons/>
         </div>
    )
}

export default LayOut


