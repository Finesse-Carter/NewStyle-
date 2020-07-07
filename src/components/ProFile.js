import React from "react";
import GridItems from "./GridItems";
import Aside from "./Aside"
import UserName from './UserName'
// import { List } from '@material-ui/core'

const items = [
  { name: "shoes", imgUrl: "/img/even-fu-eSpruE7bK8U-unsplash.jpg" },
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
  {userName:'bob'},
  { name: "Griditem", imgUrl: "/img/eli-defaria-oV4PktGcXCs-unsplash.jpg" },
  { name: "Griditem", imgUrl: "/img/eli-defaria-oV4PktGcXCs-unsplash.jpg" },
  { name: "Griditem", imgUrl: "/img/eli-defaria-oV4PktGcXCs-unsplash.jpg" },
  { name: "Griditems", imgUrl: "/img/ian-dooley-TT-ROxWj9nA-unsplash.jpg" },
  { name: "jackets", imgUrl: "/img/mike-von-wINYGcOk-Ps-unsplash.jpg" },
];

function ProFile(props) {
  const grid = [];
 
  for (let i = items.length - 1; i >= 0; i--) {
   
    const element = <GridItems item={items[i]} />;
    grid.push(element);
  }
  return (
    <div className="ProFile" style={flexContaioner}>
      <Aside/>
      <UserName item={props.item}/>
      <div className="ProFileContaioner" style={ProFileContaioner}>

      {grid}
      {/* <GridItems item={{name:'finesse'}} ></GridItems> */}
      </div>
    </div>
  );
}
const ProFileContaioner={
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "center",
  backgroundColor: "white",
  alignItems: "flex-end",
  flexWrap: " wrap",
  alignContent: "center",
  flexFlow: "row wrap",
  width: "80%",
  margin: 'auto',
  border: '3px blue solid',
}
const flexContaioner = {
  display: "flex",
  backgroundColor: "white",
  width: "100%",
  
};
export default ProFile;
