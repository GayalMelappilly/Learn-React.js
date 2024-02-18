import './App.css'
import { useState } from 'react'
import Employee from './components/Employee'

function App() {

  let emp = [
    {
      name: 'Gayal',
      age: 18
    },
    {
      name: 'Sam',
      age: 23
    },
    {
      name: 'Mark',
      age: 32
    },
    {
      name: 'Levi',
      age: 42
    },
    {
      name: 'Frank',
      age: 23
    }
  ]

  return (
    <div className='App'>
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {
        emp.map((obj, index) =>
        (
          <Employee key={index} {...obj} />
        )
        )}
      </table>
    </div>
  );
}

export default App;
