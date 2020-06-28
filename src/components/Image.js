import React from 'react'
import Swatch from './Swatch'
import Delelet from './Delelet'
import Lists from './Lists'


function Image(props){
    return (
  <div className='Imgae' style={flexItem} >
  <h1 style={tittle}>
      {props.item.name} 
    </h1>
    <img style={pic} src={props.item.imgUrl} alt={props.item.name} />
    <Lists  item={props.item}/>
    <Delelet/> <Swatch/>
  </div>
    )
  }
  const flexItem={
    // order:-1,
  }
  
  const pic ={ 
    width: '300px',
    // order:4,
  } 
    
const tittle ={
margin: 0,
}
  export default Image