import React from 'react';
import './App.css';

import Info from './components/Info/Info';
import Members from './components/Members/Members';
import InfoMeet from './components/InfoMeet/InfoMeet';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
        <Info />
        <h6>Next MeetUp</h6>
        <InfoMeet />
        <h6>About MeetUp</h6>
        <h5>Come And Meet Other Developers Interested</h5>
        <h5>Twitter : @Ariel_Andalas</h5>
        <h6>Members</h6>
        <Members />
        <h6>Past MeetUp</h6>
        <div className="container">
        <div className="conCardPast">
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
    </div>
  );
}

export default App;
