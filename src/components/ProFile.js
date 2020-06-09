import React from 'react'
// import { List } from '@material-ui/core'

const items = [{ name:'shoes', colors:['b']},
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
{name:'Griditem'},
{name:'Griditems'},
{name:'jackets'}]

function Swatch(params) {
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

function Image(props){
  
  return (
<div>
  <img src={props.imgUrl} alt={props.name} />
</div>
  )
}

function Lists(props) {
  return(
    <div>
      <ul>
        <>
        <li className="colorDot far fa-circle">{props.color}</li><li className="colorDot far fa-circle">{props.colors}</li>
        </>
      </ul>
    </div>
  )
}


function Griditem(props){
console.log(props.item)
    return(
<div style={{backgroundColor: 'white'}}>

<div style={{webkitBoxFlex: '0',
msFlex: '0 0 33.33333%',
flex: '0 0 33.33333%',
maxWidth: '33.33333%',
width: '100%',
float: 'right',
mozTransition: 'all 0.5s ease',
oTransition: 'all 0.5s ease',
webkitTransition: 'all 0.5s ease',
msTransition: 'all 0.5s ease',
transition: 'all 0.5s ease',
// backgroundColor: 'white'
}}>
<Image/>
<Lists/>
<Delelet/> <Swatch/>
  


<h1>
  {props.item.name} 
</h1>
</div>
</div>
)
}

function ProFile() {
  const grid=[]  
    for(let i =0;i<items.length;i++){
        const element = <Griditem item={items[i]} />
        grid.push(element)
    }
    return (
        <div>
           {grid}
           <Griditem item={{name:'finesse'}} ></Griditem>
        </div>
    )
}

export default ProFile
