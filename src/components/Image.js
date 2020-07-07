import React from 'react'
import '../css/Image.css'
function click() {
  //help
  // let modal = document.getElementsByClassName("myModal");
//   // modal.style.display = "none";
//  return(

//    <img src={props.item.imgUrl} alt={props.item.name}/>
//  )
}
function Image(props){
 
  return (
  <div className='Image'>
    <div className='modal myImg' onClick={click}>
    <span className='close' ></span>
    <img className="modal-content" style={pic} src={props.item.imgUrl} alt={props.item.name} />
<div className="caption"></div>
    </div>
    
  </div>
    )
  }
 
  
  const pic ={ 
    width:'100%',
    maxWidth:'350px',
    cursor: 'pointer',
    transition: '0.3s',
    hoverOpacity: '0.7' ,
    background:'black',
  } 
    


  export default Image