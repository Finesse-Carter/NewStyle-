import React from 'react'
import Swatch from './Swatch'
import Delelet from './Delelet'
import Image from './Image'
import Lists from './Lists'

function GridItem(props){
    console.log(props.item)
        return(
    <div style={{backgroundColor: 'white'}}>
    
    
    <Image item={props.item}/>
    <Lists  item={props.item}/>
    <Delelet/> <Swatch/>
      
    
    
    <h1>
      {props.item.name} 
    </h1>
    </div>
    
    )
    }

    export default GridItem