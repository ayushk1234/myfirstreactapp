import React from "react";
export function Person({name,nickName='shake',images}) {
    const url = images?.[0]?.small?.url;
  return (<div >
    <img src={url} alt={name} style={{width:'50px'}}/>
    <h4>{name}</h4>
    <p>Nickname:{nickName}</p>
    </div>)

}
  