import './App.css'
import Chicken from './Chicken.jsx'
import Greeter from './Greeter.jsx';
import Die from './Die.jsx';
import ListPicker from './ListPicker.jsx';
import DoubleDice from './DoubleDice.jsx';
import ColorList from './ColorList.jsx';
import Slots from './Slots.jsx';
import ShoppingList from './ShoppingList.jsx';

const data = [
  {item: 'eggs', quantity: 12, completed: true},
  {item: 'milk', quantity: 1, completed: false},
  {item: 'apples', quantity: 4, completed: true},
  {item: 'bananas', quantity: 7, completed: false}
]

function App() {
  return <div>
    {/* <ColorList colors={['red', 'pink', 'lavender', 'blue']}/>
    <Slots val1='1' val2='1' val3='1'/>
    <Slots val1='1' val2='2' val3='1'/> */}

      <ShoppingList items={data}/>
  </div>
}

export default App;
