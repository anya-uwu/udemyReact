import './App.css'
import Counter from './Counter'
import EmojiClicker from './EmojiClicker'
import ScoreKeeper from './ScoreKeeper'

function App() {
  return (
    <>
    <h1>state demo</h1>
    <Counter/>
    <EmojiClicker/>
    <ScoreKeeper numPlayers={10} target={3} />
    </>
  )
}

export default App
