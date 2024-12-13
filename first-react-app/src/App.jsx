import './App.css'
import Chicken from './Chicken.jsx'
import Greeter from './Greeter.jsx';
import Die from './Die.jsx';
import ListPicker from './ListPicker.jsx';
import DoubleDice from './DoubleDice.jsx';
import ColorList from './ColorList.jsx';
import Slots from './Slots.jsx';
import ShoppingList from './ShoppingList.jsx';
import PropertyList from './PropertyList.jsx';
import Clicker from './Clicker.jsx';
import Counter from './Counter.jsx';
import Toggler from './Toggler.jsx';
import ColorGrid from './ColorGrid.jsx';

const data = [
  { item: 'eggs', quantity: 12, completed: true },
  { item: 'milk', quantity: 1, completed: false },
  { item: 'apples', quantity: 4, completed: true },
  { item: 'bananas', quantity: 7, completed: false }
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return <div>
    {/* <ColorList colors={['red', 'pink', 'lavender', 'blue']}/>
    <Slots val1='1' val2='1' val3='1'/>
    <Slots val1='1' val2='2' val3='1'/> */}

    {/* <ShoppingList items={data}/> */}
    {/* <PropertyList items={properties} /> */}
    {/* <Clicker/> */}
    <Counter/>
    <Toggler/>
    <ColorGrid/>
  </div>
}

export default App;
