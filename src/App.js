import { useState } from 'react'
import './App.css'
import UserDetails from './components/UserDetails'
import data from './db.json'
// import data from db.json

console.log(data)

function App() {
  const [list, setList] = useState([])


  const sortAscending = (list) => {
  let updated= list.sort((a,b)=>{
    const A = a.first_name.toUpperCase();
    const B = b.first_name.toUpperCase();

    if( A < B) { return -1 };
    if( A > B) { return 1 };

    return 0;
  })
  setList([updated]) 
  
  }

  const sortDescending = (list) => {
    let updated= list.sort((a,b)=>{
      const A = a.first_name.toUpperCase();
      const B = b.first_name.toUpperCase();
  
      if( A < B) { return 1 };
      if( A > B) { return -1 };
  
      return 0;
    })
    setList([updated])
  }

  return (
    <div className="App" data-testid="app">
      <button data-testid="sort-asc-btn" onClick={() => sortAscending(data)}>
        Sort by Asc
      </button>
      <button data-testid="sort-desc-btn" onClick={() => sortDescending(data)}>
        Sort by Desc
      </button>
      {/*  map through the users data and pass props to the Userdetails component */}
      {data.map((item) => (
        <UserDetails key={item.id} userDetails={item} />
      ))}
    </div>
  )
}

export default App
