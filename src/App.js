import logo from './logo.svg';
import './App.css';
import { TruckCardCollection,NavBar, MarketingFooter} from './ui-components'

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"} />
      <TruckCardCollection overrideItems={({item, index}) => {
  if (item.truckStatus === 'Running') {
     return { backgroundColor: 'green' }
   } 
   else {
    return { backgroundColor: 'yellow' }
   }
 }} />
      <MarketingFooter width={"100vw"}/>
    </div>
  );
}

export default App;
