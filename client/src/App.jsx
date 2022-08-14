import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import PlayerList from "./components/PlayerList";
import PlayerForm from "./components/PlayerForm";
import { useEffect, useState } from "react";
function App() {
  
  const [Player, setPlayer] = useState([]);

  useEffect(() => {
    setPlayer([
      {
        username: 'AlfaRiza',
        email: 'alfariza@gmail.com',
        experience: 6000
      },
      {
        username: 'Alfahmada',
        email: 'alfahmada@gmail.com',
        experience: 2000
      },
      {
        username: 'Alfaaja',
        email: 'alfaja@gmail.com',
        experience: 8000
      },
    ])
  
    return () => {
      setPlayer([])
    }
  }, []);

  const addPlayer = (payload) => {
    // const newPlayer = {
    //   username: 'dummy',
    //   email: 'dummy@gmail.com',
    //   experience: 3000
    // };
    setPlayer(Player => [...Player, payload]
    )
  }
  
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h2>Dashboard Player</h2>
            <PlayerList players={Player}/>
          </div>
          <div className="col-12 col-md-4">
            <h2>Form Player</h2>
            <Card>
              <Card.Body>
                <PlayerForm onHandleCreate={addPlayer}/>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
