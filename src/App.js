import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


import Info from './components/Info/Info';
import Members from './components/Members/Members';
import InfoMeet from './components/InfoMeet/InfoMeet';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
        <Info />
        <h1>Next MeetUp</h1>
        <InfoMeet />
        <h1>About MeetUp</h1>
        <h5>Come And Meet Other Developers Interested</h5>
        <h5>Twitter : @Ariel_Andalas</h5>
        <h1>Members</h1>
        <Members />
        <h1>Past MeetUp</h1>
        <div className="container">
        <div className="containerCards">
        <Cards
          dated="#Date"
          content="Ariel Busy Andalas."
          view="2000"
        />
        <Cards
          dated="#Date"
          content="Bochim Na."
          view="3000"
        />
        <Cards
          dated="#Date"
          content="Lionel Messi."
          view="4000"
        />
      </div>
      </div>
      <div className="footer">
        <h6>Copyright Hacktiv8 2020</h6>
      </div>
    </div>
  );
}

export default App;
