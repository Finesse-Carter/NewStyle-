import React from 'react'
import Image from './Image'
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

function Swatch(props) {
return(
  <a href="/profile/fits/" className="matchPic">
                      <i className="fas fa-swatchbook"/>
                    </a>
)  
}

function Delelet(props){
  return(
<i class="deletePic far fa-trash-alt"></i>
  )
}



function Lists(props) {
  return(
    <div>
      <ul>
        <>
        <li className="colorDot far fa-circle">{props.item.color}</li><li className="colorDot far fa-circle">{props.item.colors}</li>
        </>
      </ul>
    </div>
  )
}


function Griditem(props){
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

function ProFile() {
  const grid=[]  
    for(let i =0;i<items.length;i++){
        const element = <Griditem style={flexItem} item={items[i]} />
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
