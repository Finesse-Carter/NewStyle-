import React from 'react'

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

  export default Lists