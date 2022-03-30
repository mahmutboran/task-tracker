import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, deleteTask, toggleDone ,deleteAllTask}) => {
  return (
    <div >
      <div>

        {
          tasks.map((x) => {
            return (
              <div key={x.id}>
                <Task x={x} deleteTask={deleteTask} toggleDone={toggleDone} />
              </div>
            )
          })
        }

      </div>
      <div className='header'>

        <button
          className="btn "
          style={{ backgroundColor: "red" }}
          onClick={deleteAllTask}

        >Delete All Task List</button>



      </div>

    </div>
  )
}

export default Tasks