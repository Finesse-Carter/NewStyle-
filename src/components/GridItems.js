import React from 'react'
import Lists from './Lists'
import Image from './Image'
import Delelet from './Delelet'
import Swatch from './Swatch'


function GridItem(props){
    console.log(props.item)
        return(
    <div className='GridItem' style={flexItem} >
    <h1 style={tittle}>
      {props.item.name} 
    </h1>
    <span className='close' ></span>
    <Image  item={props.item}/>
    <Lists  item={props.item}/>
    <Delelet/> <Swatch/>
    </div>
    
    )
    }
    
    const tittle ={
        margin: 0,
        }

    const flexItem={
        order:-1,
        flexBasis: 'auto',
        // flexGrow:'1',
        // justifyContent:'flex-end'
        }
     
    export default GridItem