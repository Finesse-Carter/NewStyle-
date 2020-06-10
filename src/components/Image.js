import React from 'react'



function Image(props){
    return (
  <div>
    <img style={pic} src={props.item.imgUrl} alt={props.item.name} />
  </div>
    )
  }

  const pic ={ 
    width: '100px',
    height: '50px'
  }

  export default Image