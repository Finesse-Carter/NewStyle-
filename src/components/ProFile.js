import React from 'react'
import GridItem from './GridItems'
// import { List } from '@material-ui/core'

  const items = [{ name:'shoes', imgUrl:'/img/even-fu-eSpruE7bK8U-unsplash.jpg'},
// {_id:Object('5eaad392cc367357d8a7aabd')},
// {posterId:Object('5eaa10a73e1eac13b4564b9d')},
// {caption:""},
// {likes:1},
// {liked:"liked"},
// {imgPath:""},
// {imgUrl:""},
// {color:{r:42,g:51,b:76}},
// {colors:[{r:42,g:51,b:76}]},
// {clothing:""},
// {shareFeed:null},
// {title:"watch"},
// {classIfLiked:""},
{name:'Griditem', imgUrl: '/img/eli-defaria-oV4PktGcXCs-unsplash.jpg' },
{name:'Griditems', imgUrl: '/img/ian-dooley-TT-ROxWj9nA-unsplash.jpg'},
{name:'jackets', imgUrl: '/img/mike-von-wINYGcOk-Ps-unsplash.jpg'}]











function ProFile() {
  const grid=[]  
    for(let i =0;i<items.length;i++){
        const element = <GridItem style={flexItem} item={items[i]} />
        grid.push(element)
    }
    return (
        <div>
           {grid}
           {/* <Griditem item={{name:'finesse'}} ></Griditem> */}
        </div>
    )
}
 const flexItem={
   display:'flex',
   
 }
export default ProFile
