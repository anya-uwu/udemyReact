import './App.css'
import Button from '@mui/material/button'
import RatingDemo from './RatingDemo'

function App() {
  return (
    <>
      <Button color='success' onClick={() => alert('hi')} variant="contained">Contained</Button>
      <RatingDemo/>
    </>
    
  )
}

export default App
