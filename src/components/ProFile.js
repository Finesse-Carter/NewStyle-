import React from "react";
import GridItems from "./GridItems";
import Aside from "./Aside"
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
  { name: "Griditem", imgUrl: "/img/eli-defaria-oV4PktGcXCs-unsplash.jpg" },
  { name: "Griditem", imgUrl: "/img/eli-defaria-oV4PktGcXCs-unsplash.jpg" },
  { name: "Griditem", imgUrl: "/img/eli-defaria-oV4PktGcXCs-unsplash.jpg" },
  { name: "Griditems", imgUrl: "/img/ian-dooley-TT-ROxWj9nA-unsplash.jpg" },
  { name: "jackets", imgUrl: "/img/mike-von-wINYGcOk-Ps-unsplash.jpg" },
];

function ProFile() {
  const grid = [];
  // (var i = arr.length - 1; i >= 0; i--)
  for (let i = items.length - 1; i >= 0; i--) {
    // {for(let i =0;i<items.length;i++){
    const element = <GridItems item={items[i]} />;
    grid.push(element);
  }
  return (
    <div className="ProFile" style={flexContaioner}>
      <Aside/>
      {grid}
      {/* <GridItems item={{name:'finesse'}} ></GridItems> */}
    </div>
  );
}
const flexContaioner = {
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "center",
  backgroundColor: "white",
  alignItems: "flex-end",
  flexWrap: " wrap",
  alignContent: "center",
  flexFlow: "row wrap",
  width: "70%",
};
export default ProFile;
