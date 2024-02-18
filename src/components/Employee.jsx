import React from 'react'

function Employee({name, age}) {
  return (
    <tr>
        <td>{name}</td>
        <td>{age}</td>
    </tr>
  )
}

export default Employee