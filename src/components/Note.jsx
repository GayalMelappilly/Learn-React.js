import React from 'react'

function Note(props) {
    const notes = props.notes
    const lists = notes.map((note)=>{
        return (
            <p><i class="fa-solid fa-trash dlt-btn"></i> &nbsp;📍{note}</p>
        )
    })
    console.log("PROPS : "+lists)
  return (
    <div>
        {lists}
    </div>
  )
}

export default Note