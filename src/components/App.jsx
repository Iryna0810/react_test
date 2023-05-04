import { Cards } from "./Cards/Cards";
import { Main } from "./Main/Main";
import bootstrap from 'bootstrap';

function App() {
  return (
    <div
      style={{

        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101'
        //  font: '1rem/ 1.5 var(--bs - font - sans - serif)',
        // color: 'var(--bs - blue)'
   
}}>
        
      <Main />
      <Cards />
    </div>
  );
}

export { App };
