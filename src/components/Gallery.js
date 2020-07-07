import React from 'react'
// import Aside from './Aside'
// import ProFile from './ProFile'
import Image from './Image'

  

function Gallery(props) {
  
  
    return (
    
        
        <div>
        <Image item={props.item}/>
            {/* <Aside/>
            <ProFile/> */}
            
    
        </div>
    )
}


export default Gallery
