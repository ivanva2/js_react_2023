import logo from './logo.svg';
import './App.css';
// import './mycss.css'
// import * as classstyle from './mycs.module.css'
import React, { useEffect, useState } from 'react';
import { Card } from 'antd'

function App() {
  const [counter, setCounter] = useState()
  const [users, setUsers] = useState([])


  const increment = () => {
    setCounter(counter+1)
  }
  const decrement = () => {
    if (counter > 0) setCounter(counter-1)
    
  }

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        if (res && Array.isArray(res) && res.length > 0) {
          setUsers(res)
        } //typeof res == 'array'
      })

  }

  const loadUsers = () => {
    getData()
  }

  useEffect(()=>{
    getData()
  }, [])

  

  const styles = {
    // 'border: 1 solid #000',
    // color: 'red',
    border: '1px solid #000',
    padding: 10,
    margin: 'auto',
    borderRadius: 10,
    marginBottom: 5,
    // backgroudColor: '#333'
  }
  return(
    <>
      <h2>Users: <button type="" onClick={() => {loadUsers()}}>Load users</button></h2>
      <div style={{margin: 50, display: 'flex', gap: 16}}>
        {users.length > 0 &&
          users.map(user => {
            return <Card title={user.name} key={Math.random()} style={{width: 200}}><p  >{user.email}</p></Card>
          })
        }
      </div>
    </>
  )
}

export default App;