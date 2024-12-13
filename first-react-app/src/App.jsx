import './App.css'
import Chicken from './Chicken.jsx'
import Greeter from './Greeter.jsx';
import Die from './Die.jsx';
import ListPicker from './ListPicker.jsx';
import DoubleDice from './DoubleDice.jsx';
import ColorList from './ColorList.jsx';
import Slots from './Slots.jsx';

function App() {
  return <div>
    {/* <Greeter person='Sadie' from='Candace'/> */}
    {/* <Die numSides={20} />
    <Die/>
    <Greeter/>
     */}
    {/* <ListPicker values={[1, 2, 3]} />
    <ListPicker values={['a', 'b', 'c']} /> */}
    <DoubleDice />
    <DoubleDice />
    <DoubleDice />

    <ColorList colors={['red', 'pink', 'lavender', 'blue']}/>
    <Slots val1='1' val2='1' val3='1'/>
    <Slots val1='1' val2='2' val3='1'/>
  </div>
}

export default App;
