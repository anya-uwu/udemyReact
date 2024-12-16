import { useState } from 'react'
import CSSBaseline from '@mui/material/CssBaseline'
import './App.css'
import TodoList from './TodoList'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CSSBaseline/>
    <Navbar/>
    <TodoList/>
    </>
  )
}

export default App
