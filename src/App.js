import './App.css';
import { useState } from 'react';
import Note from './components/Note'

function App() {
  const [lists, setLists] = useState([])
  const [list, setList] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <div className="heading-div">
          <h1 className='heading'>TODO LIST</h1>
        </div>
        <hr />
      </header>
      <section className='App-section'>
        <div className="note-section">
          <p className='note'>
            <p className="note">{list}</p>
            <Note notes={lists}/>
          </p>
        </div>
        <hr />
        <div className='input-div'>
          <input value={list} onChange={(e)=>setList(e.target.value)} className='note-input' type="text" placeholder='Add note'/>
          <br />
          <button className='add-btn' onClick={()=>{
            setLists([...lists,list])
            setList('')
            }}>ADD</button>
        </div>
      </section>
    </div>
  );
}

export default App;
