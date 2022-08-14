import React, { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap";

const PlayerForm = ({onHandleCreate, FormPlayer, onHandleResetFormPlayer, onHandleUpdatePlayer}) => {
    const [Username, setUsername] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Exp, setExp] = useState(0)

    const onHandleResetForm = () => {
        setUsername('')
        setEmail('')
        setPassword('')
        setExp(0)
        onHandleResetFormPlayer()
    }

    const onHandleSubmit = (e) => {
        e.preventDefault()
        const player = {
            username: Username, 
            email: Email, 
            password: Password,
            experience: Exp
        }

        if(FormPlayer?.id) {
            onHandleUpdatePlayer({ ...player, id: FormPlayer?.id})
        } else {
            onHandleCreate(player);
        }
        onHandleResetForm();

    }

    useEffect(() => {
        setUsername(FormPlayer? FormPlayer.username : '')
        setEmail(FormPlayer? FormPlayer.email: '')
        setPassword(FormPlayer? FormPlayer.password : '')
        setExp(FormPlayer? FormPlayer.experience : 0)
    
    }, [FormPlayer])
    
    
    return (
        <>
            <Form onSubmit={(e) => onHandleSubmit(e)}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control required onChange={(e) => setUsername(e.target.value)} value={Username} type="text" name="username" id="username" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Email address</Form.Label>
                    <Form.Control required onChange={(e) => setEmail(e.target.value)} value={Email} type="email" name="email" id="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control required onChange={(e) => setPassword(e.target.value)} value={Password} type="password" name="password" id="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="experience">Experience</Form.Label>
                    <Form.Control required type="number" onChange={(e) => setExp(e.target.value)} value={Exp} min={0} name="experience" id="experience" placeholder="Experience" />
                </Form.Group>

                <div className="d-flex justify-content-between">
                    <Button onClick={onHandleResetForm} variant={"outline-info"} type="reset">
                        Reset
                    </Button>
                    <Button variant={FormPlayer ? "success" : "primary"} type="submit">
                        {FormPlayer ? 'Update' : 'Submit'}
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default PlayerForm