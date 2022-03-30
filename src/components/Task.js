import React from 'react'

import {FaTimes} from "react-icons/fa"

const Task = ({x , deleteTask ,toggleDone}) => {
  return (
    <div 
    className={`task ${x.isDone ? "done":""}` } 
    onDoubleClick={()=>toggleDone(x.id)}>
        <h3>{x.id}.{x.text} 
        <FaTimes 
        style={{color:"red",cursor:"pointer"}} 
        onClick={()=> deleteTask(x.id)}/>
        </h3>
        <p>{x.day}</p>
    </div>
  )
}

export default Task