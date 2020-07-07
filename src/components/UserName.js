import React from 'react'

function UserName(props) {
    return (
        <div>
           <h2>
               {props.item.userName}
           </h2> 
        </div>
    )
}

export default UserName
