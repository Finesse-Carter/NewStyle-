import React from 'react'
import Swatch from './Swatch'
import Delelet from './Delelet'
import Lists from './Lists'
import '../css/Image.css'
function click(props) {
  //help
  // let modal = document.getElementsByClassName("myModal");
//   // modal.style.display = "none";
//  return(

//    <img src={props.item.imgUrl} alt={props.item.name}/>
//  )
}
function Image(props){
 
  return (
  <div className='Image'  >
  <h1 style={tittle}>
      {props.item.name} 
    </h1>
    <div className='modal myImg' onClick={click}>
    <span className='close' ></span>
    <img className="modal-content" style={pic} src={props.item.imgUrl} alt={props.item.name} />
<div className="caption"></div>
    </div>
    <Lists  item={props.item}/>
    <Delelet/> <Swatch/>
  </div>
    )
  }
  // const fmodal={
  //   // // border: '1px black solid', 
  //   // // display: 'none', /* Hidden by default */
  
  //   // zIndex: 1, /* Sit on top */
  //   // // paddingTop: '100px', /* Location of the box */
  //   // left: 0,
  //   // top: 0,
  //   // width: '100%', /* Full width */
  //   // height: '100%', /* Full height */
  //   // overflow: 'auto', /* Enable scroll if needed */
  //   //  /* Fallback color */
  //   // backgroundColor: 'rgba(0,0,0,0.9)', /* Black w/ opacity */
  // }
  
  const pic ={ 
    // width: '350px',
    
    width:'100%',
    maxWidth:'350px',
    cursor: 'pointer',
    transition: '0.3s',
    hoverOpacity: '0.7' ,
    background:'black',
  } 
    
const tittle ={
margin: 0,
}

  export default Image