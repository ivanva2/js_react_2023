import { Navbar } from './components/Navbar/Navbar';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import User from "./pages/user";
import Register from "./pages/register";
import Welcome from "./pages/welcome";
import { Routes, Route, useLocation } from 'react-router-dom';
function App() {


  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Register />}/>
        <Route path='/register' element={<Welcome />}/>
        
        <Route path="*" element={<User />} />
        
      </Routes>
      

    </Navbar>
  )
}
const Home = () => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])


  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        if (res && Array.isArray(res) && res.length > 0) {
          setUsers(res)
        } //typeof res == 'array'
      })
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => {
        if (res && Array.isArray(res) && res.length > 0) {
          setPosts(res)
        } //typeof res == 'array'
      })

  }

  useEffect(()=>{
    getData()
  }, [])



  return(
    <>
      <h2 style ={{marginLeft: 50}}>Лента пользователей</h2>
      <div style={{marginLeft: 50, display: 'grid'}}>
        {users.length > 0 &&
          users.map(user => {
            let x = 1;
            return <Card title={user.name} key={Math.random()} style={{width: 1200, backgroundColor: '#6495ED',marginBottom: 15}}>
            <p className='text_text'>Почта: {user.email}</p>
            <p className='text_text'>Телефон: {user.phone}</p>
            <h2 style={{marginBottom:10, marginTop:0}}>Посты:</h2>
            {posts.map(post => {
              if(post.userId === user.id) 
              {return <Card type="inner" style={{marginBottom: 15}}><h3 style={{marginBottom: 10, marginTop:0}}>#{x++} {post.title}</h3> <p>{post.body}</p> </Card>}
              else{
                return ''
              }})}
            </Card>
          })
        }
      </div>
    </>
  )
}



export default App;