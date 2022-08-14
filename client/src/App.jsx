import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form } from "react-bootstrap";
import PlayerList from "./components/PlayerList";
import PlayerForm from "./components/PlayerForm";
import { useEffect, useState } from "react";
function App() {
  
  const [Player, setPlayer] = useState([]);
  const [FormPlayer, setFormPlayer] = useState()
  const [Keyword, setKeyword] = useState('')

  useEffect(() => {
    setPlayer([
      {
        id: 1,
        username: 'AlfaRiza',
        email: 'alfariza@gmail.com',
        password: '1234',
        experience: 6000
      },
      {
        id: 2,
        username: 'Alfahmada',
        email: 'alfahmada@gmail.com',
        password: 'password',
        experience: 2000
      },
      {
        id: 3,
        username: 'Alfaaja',
        email: 'alfaja@gmail.com',
        password: 'rahasia',
        experience: 8000
      },
    ])
  
    return () => {
      setPlayer([])
    }
  }, []);

  const addPlayer = (payload) => {
    payload.id = Math.max(...Player.map(player => player.id)) + 1 
    setPlayer( Player => [...Player, payload] )
  }

  const selectEdit = (playerId) => {
    const player = Player.filter((player) => {
      return player.id === playerId
    })

    setFormPlayer(player[0])
  }
  
  const onHandleResetFormPlayer = () => {
    setFormPlayer();
  }

  const onHandleUpdatePlayer = (player) => {
    const indexEdit = Player.findIndex(item => item.id === player.id)

    let copyPlayer = [...Player]
    copyPlayer[indexEdit] = player
    setPlayer(copyPlayer)
  }

  const searchPlayer = () => {
    return Player
            .filter(player => 
              new RegExp(Keyword, 'g').test(player.username) || 
              new RegExp(Keyword, 'g').test(player.email) || 
              new RegExp(Keyword, 'g').test(player.experience))
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col-5">
                <h2>Dashboard Player</h2>
              </div>
              <div className="col-7">
                <Form.Control required type="text" onInput={(e) => setKeyword(e.target.value.trim())} value={Keyword} name="search" id="search" placeholder="Search..." />
              </div>
            </div>
            <PlayerList players={searchPlayer()} selectEdit={selectEdit}/>
          </div>
          <div className="col-12 col-md-4">
            <h2>Form Player</h2>
            <Card>
              <Card.Body>
                <PlayerForm 
                  onHandleCreate={addPlayer} 
                  onHandleResetFormPlayer={onHandleResetFormPlayer} 
                  onHandleUpdatePlayer={onHandleUpdatePlayer}
                  FormPlayer={FormPlayer}/>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
