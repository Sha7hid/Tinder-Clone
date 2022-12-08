import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';

function App() {
  return (
    //BEM class naming convention
    <div className="App">
    
     {/* Header */}
     <Header  />
     {/* TinderCards */}
     <TinderCards/>
     {/* SwipeButtons */}
    </div>
  );
}

export default App;
