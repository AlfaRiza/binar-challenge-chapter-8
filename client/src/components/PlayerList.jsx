import React from 'react'
import { Table, Button } from "react-bootstrap";

const PlayerList = ({players, selectEdit}) => {
    return (
        <>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Experience</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    { players.map((player, index) => {
                        return (<tr key={index}>
                            <td>{index+1}</td>
                            <td>{player.username}</td>
                            <td>{player.email}</td>
                            <td>{player.experience}</td>
                            <td>
                                <Button onClick={ () => selectEdit(player.id) } variant="primary">Edit</Button>
                            </td>
                        </tr>)
                    }) }
                    
                </tbody>
            </Table>
        </>
    )
}

export default PlayerList