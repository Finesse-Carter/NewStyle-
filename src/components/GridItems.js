import React from 'react'

import Image from './Image'


function GridItem(props){
    console.log(props.item)
        return(
    <div className='GridItem' style={flexItem} >
    
    <Image  item={props.item}/>
      
    </div>
    
    )
    }
    
    const flexItem={
        order:-1,
        flexBasis: 'auto',
        // flexGrow:'1',
        // justifyContent:'flex-end'
        }
     
    export default GridItem