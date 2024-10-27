
import './App.css';
import NavBar from './componenst/NavBar';
import {ItenListContainer} from './ItenListContainer/ItenListContainer';


function App() {

  console.log ("rederizar App")
 

  return (
    <>
    
    <NavBar/>

    <ItenListContainer greeting="Bienvenidos a Amelia tejidos"/>

    </>
  );
}

export default App;
