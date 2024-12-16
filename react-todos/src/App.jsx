import { useState } from 'react'
import CSSBaseline from '@mui/material/CssBaseline'
import './App.css'
import TodoList from './TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CSSBaseline/>
    <h1>Todos</h1>
    <TodoList/>
    </>
  )
}

export default App
